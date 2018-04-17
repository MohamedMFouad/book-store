// const App = () => {
//     return (
//        <h2>Hello components </h2>
//     );
// };
//Book
//Boollist
const React = require('react');
import BookList from './BookList'


class App extends React.Component{
    state = { answer : 42}
    render(){
        return(
            <div>
                <BookList />
                <BookList />
            </div>
        );
    }
}
export default App;