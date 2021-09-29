import { useHistory } from "react-router";

const Add = ({books, setBooks}) => {

    const history = useHistory()
    let bookTitle = '';
    let bookAuthor = '';

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let x = 0;

        let newList = [];

        if (books) {
            newList = books;
            x = books.length;
        }

        const newBook = { title:bookTitle, author:bookAuthor, id:x };

        newList.push(newBook);
        window.localStorage.setItem('books', JSON.stringify(newList));
        setBooks(newList);
        history.push('/');
    }

    const handleChange = (e) => {
        if (e.currentTarget.id === 'title') {
            bookTitle = e.currentTarget.value;
        }
        else if (e.currentTarget.id === 'author') {
            bookAuthor = e.currentTarget.value;
        }
    }

    return ( 
        <div className="add container">
            <h3 className="header">Add a book to your collection</h3>
            <form>
                <input onChange={(e) => handleChange(e)} id="title" type="text" placeholder="Title"/>
                <input onChange={(e) => handleChange(e)} id="author" type="text" placeholder="Author"/>
                <button onClick={(e) => handleSubmit(e)} type="button">Add</button>
            </form>
        </div>
     );
}
 
export default Add;