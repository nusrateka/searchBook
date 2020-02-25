import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class BookShow extends React.Component{
    render(){
        const book = this.props.book;
        return(
            !book.stocked ? (
                <table>
                    <thead>
                    <tr>
                        <td style={{color:'red', padding:'5px'}}>
                            {book.category}
                        </td>
                        <td style={{color:'red', padding:'5px'}}>
                            {book.name}
                        </td>
                        <td style={{color:'red', padding:'5px'}}>
                            {book.price}
                        </td>
                    </tr>
                    </thead>
                </table>
            ) :
                (
                    <table>
                        <thead>
                        <tr>
                            <td style={{padding:'5px'}}>
                                {book.category}
                            </td>
                            <td style={{padding:'5px'}}>
                                {book.name}
                            </td>
                            <td style={{padding:'5px'}}>
                                {book.price}
                            </td>
                        </tr>
                        </thead>
                    </table>
                )


        )
    }
}

class BookTable extends React.Component {
    render() {
        const books = this.props.books;
        const lastCategory = [];
        const inStock = this.props.inStock;
        const searchText = this.props.searchText;
        const showbook=[];
        books.map(book=>{
            if (book.name.indexOf(searchText) === -1) {
                return;
            }
            if (!book.stocked && inStock){
                return;
            }
             if(book.category !== lastCategory){
                return showbook.push(<BookShow book={book} key={book.name}/>);
            }
             book.category = lastCategory;
        });
        return (
            <div>
                <table>
                    <thead>
                    <tr>
                        <th style={{padding:'5px'}}>Category</th>
                        <th style={{padding:'5px'}}>Name</th>
                        <th style={{padding:'5px'}}>Price</th>
                    </tr>
                    </thead>
                </table>
                {showbook}
            </div>
        );
    }
}

class SearchBar extends React.Component{
    render(){
        const handleFilterTextChange = (e)=>{
            this.props.onChangeSearchText(e.target.value);
        };
        return(
            <form>
                <input type="text" placeholder="search bar" value={this.props.searchText} onChange={handleFilterTextChange}/>
                <p>
                    <input type="checkbox" checked={this.props.checked} onChange={this.props.onChangeCheckBox}/>
                    only show books in stock
                </p>
            </form>
        );
    }
}

class AllBookTable extends React.Component {
    constructor(props){
        super(props);
        this.state={
            searchText: '',
            inStock:false
        }
    }
    render() {
        const onChangeCheckBox=()=>{
            this.setState({inStock: !this.state.inStock})
        };
        const onChangeSearchText=(searchText)=>{
            this.setState({searchText: searchText})
        };
        return (
            <div>
                <SearchBar checked={this.state.inStock} onChangeCheckBox={onChangeCheckBox} searchText={this.state.searchText} onChangeSearchText={onChangeSearchText}/>
                <BookTable books={this.props.books} inStock={this.state.inStock} searchText={this.state.searchText}/>
            </div>
        );
    }
}

const Book = [
    {category: 'Scientific Book', price: '$29.99', stocked: true, name: 'Tin Tin'},
    {category: 'Romantic Book', price: '$9.99', stocked: true, name: 'Titanic'},
    {category: 'Horror Book', price: '$20.99', stocked: false, name: 'Vuut'},
    {category: 'Comic Book', price: '30.99', stocked: true, name: 'Superman'},
    {category: 'Drama Book', price: '12.99', stocked: false, name: 'Hamlet'},
    {category: 'Fantasy Book', price: '$19.99', stocked: true, name: 'Lord of the rings'}
];

ReactDOM.render(
    <AllBookTable books={Book} />,
    document.getElementById('root')
);
