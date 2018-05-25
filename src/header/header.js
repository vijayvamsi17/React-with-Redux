import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts, createPost, deletePost } from '../actions/postActions';

class HeaderComponent extends Component {

    constructor(props) {
        super(props);
        // this.state = { 
        //     products: JSON.parse(localStorage.getItem("products"))
        //  }
         this.onDelete = this.onDelete.bind(this);
         this.onAdd = this.onAdd.bind(this);
         this.onSubmit = this.onSubmit.bind(this);
         this.onEdit = this.onEdit.bind(this);
         this.onUpdate = this.onUpdate.bind(this);
    }

    componentWillMount() {
        this.props.fetchPosts();
        // const products = this.getProducts();
        // this.setState({products});
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    getProducts() {
        return this.state.products;
    }

    onSubmit(event) {
        event.preventDefault();
        this.onAdd(this.nameInput.value, this.priceInput.value);
    }

    onAdd(name, price) {
        const product = {
            item:name,
            price:price
        }
        this.nameInput.value = '';
        this.priceInput.value = '';
        this.props.createPost(product);
    }

    onEdit(item) {
        console.log(item);
        this.nameInput.value = item.item;
        this.priceInput.value = item.price;
        const products = this.props.posts;
    }

    onUpdate(event) {
        event.preventDefault();
        console.log("Update");
    }

    onDelete(item) {
        const products = this.props.posts;
        const filteredValue = products.filter(x => {
            return x.item !== item;
        });
        this.props.deletePost(filteredValue);
    }

    render() { 
        return ( 
            <div>
                <h3>Add Cars</h3>
                <form onSubmit={this.onSubmit}>
                <input placeholder="Name" ref={nameInput => this.nameInput = nameInput}/>
                <hr />
                <input placeholder="Price" ref={priceInput => this.priceInput = priceInput}/>
                <hr />
                <button>Add</button>
                <button onClick={this.onUpdate}>Update</button>
                </form>
                <ul>
               {this.props.posts.map(data => {
                   return (
                    <li key={data.item}>{data.item} | {data.price} | <button onClick={() => this.onEdit(data)}>Edit</button> | <button onClick={() => this.onDelete(data.item)}>Delete</button></li>
                   );
               })}
            </ul>
            </div>
         )
    }
}
const mapStatetoProps = state => ({
    posts:state.posts.items,
    newPost: state.posts.item
});
export default connect(mapStatetoProps, { fetchPosts, createPost, deletePost })(HeaderComponent);