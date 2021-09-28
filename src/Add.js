const Add = ({books}) => {


    return ( 
        <div className="add">
            <h3 className="header">Add a book to your collection</h3>
            <form>
                <input id="title" type="text" placeholder="Title"/>
                <input id="author" type="text" placeholder="Author"/>
                <button type="button">Add</button>
            </form>
        </div>
     );
}
 
export default Add;