import React from 'react'

import {
    Text,
    View,
    ScrollView,
    StyleSheet
} from 'react-native'

import { connect } from 'react-redux'

import { addBook } from './actions'

const initialState = {
    name: '',
    author: ''
}

class Books extends React.Component {

    state = initialState

    updateIput = (key, value) => {
        this.setState({
            ...this.state,
            [key]: valye
        })
    }

    addBook = () => {
        this.props.dispatchAddBook(this.state)
        this.setState(initialState)
    }

    render() {
        const { books } = this.props
        return (
            <View style={StyleSheet.container}>
                <Text style={StyleSheet.title}>Books</Text>
                <ScrollView keyboardShouldPersistTaps='always'>
                    {
                        books.map((book, index) => {
                            <View style={StyleSheet.book} key={index}>
                                <Text style={StyleSheet.name}>{book.name}</Text>
                                <Text style={StyleSheet.author}>{book.author}</Text>
                            </View>
                        })
                    }
                </ScrollView>
                <View style={StyleSheet.inputContainer}>
                    <View style={StyleSheet.inputWrapper}>
                        <TextInput
                            value={this.state.name}
                            onChangeText={value => this.updateInput('name', value)}
                            style={StyleSheet.input}
                            placeholder='Book name'
                        />
                        <TextInput
                            value={this.state.author}
                            onChangeText={value => this.updateInput('author', value)}
                            style={StyleSheet.input}
                            placeholder='Author name'
                        />
                        <TouchableOpacity onPress={this.addBook}>
                            <View style={StyleSheet.addButtonContainer}>
                                <Text style={StyleSheet.addButton}>+</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        padding: 10,
        backgroundColor: '#ffffff',
        borderTopColor: '#ededed',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100
    },
    inputWrapper: {
        flex: 1
    },
    input: {
        height: 44,
        padding: 7,
        backgroundColor: '#ededed',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        flex: 1,
        marginBottom: 5
    },
    addButton: {
        fontSize: 28,
        lineHeight: 28
    },
    addButtonContainer: {
        width: 80,
        height: 80,
        backgroundColor: '#ededed',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    container: {
        flex: 1
    },
    booksContainer {
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        flex: 1
    },
    title: {
        paddingTop: 30,
        paddingBottom: 20,
        fontSize: 20,
        textAlign: 'center'
    },
    book: {
        padding: 20
    },
    name: {
        fontSize: 18
    },
    author: {
        fontSize: 14,
        color: '#999'
    }

})

const mapStateToProps = (state) => ({ books: state.bookReducer.books })
const mapDispatchToProps = {
    dispatchAddBook: (book) => addBook(book)
}
export default connect(mapStateToProps, mapDispatchToProps)(Books);