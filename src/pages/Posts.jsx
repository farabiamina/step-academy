import {useEffect, useState} from "react";
import {useFetch} from "../hooks/useFetch";
import PostService from "../api/PostService";
import {useSortedAndSearchedPosts} from "../hooks/usePosts";
import Modal from "../UI/Modal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Pagination from "../components/Pagination";

function Posts() {
    // const [selectedSort, setSelectedSort] = useState(''); // select
    // const [query, setQuery] = useState(''); // input
    // const [isLoaded, setIsLoaded] = useState(false);
    const [visible, setVisible] = useState(false);
    const [filter, setFilter] = useState({sort: "", query: ""});
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, [page])

    const [fetchPosts, isPostLoaded, postError] = useFetch(async () => {
        const response = await PostService.getPosts(limit, page);
        setPosts(response.data);
        const totalCount = response.headers["x-total-count"]; // 100
        setTotalPages(Math.ceil(totalCount / limit)); // 100 / 10 = 10
        // console.log(totalCount, totalPages, limit);
    })

    const addPost = (newPost) => {
        setPosts([...posts, newPost]);
        setVisible(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    }

    const toggle = (id) => {
        setPosts([...posts].map((post) => post.id === id ? {...post, done: !post.done} : {...post}));
    }

    const sortedAndSearchedPosts = useSortedAndSearchedPosts(posts, filter.sort, filter.query);

    const changeVisible = () => {
        setVisible(!visible);
        console.log(visible);
    }

    return (
        <div className="App">
            <Modal visible={visible} setVisible={setVisible}>
                <PostForm add={addPost} />
            </Modal>
            <button onClick={changeVisible}>Добавить пост</button>
            <PostFilter setFilter={setFilter} filter={filter}/>
            {
                isPostLoaded
                    ? <PostList toggle={toggle} posts={sortedAndSearchedPosts} remove={removePost} />
                    : <div>Loading...</div>
            }
            {
                postError &&
                <h1>Произошла ошибка {postError}</h1>
            }
            <Pagination totalPages={totalPages} setPage={setPage} page={page} />
        </div>
    );
}

export default Posts;
