import logo from './logo.svg';
import './App.css';

function Header(props) {
    return <header>
        <h1><a href="/" onClick={(e) => {
            e.preventDefault();
            props.onChangeMode();
        }}>{props.title}</a></h1>
    </header>
}

function Nav(props) {
    const lis = [];
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];

        /**
         * <li> 에 key 값을 주는 이유
         * 
         * 리액트는 자동으로 생성한 태그에 경우에 태그들을 추적하는 근거로써
         * key 라고 하는 약속된 prop을 부여함으로
         * 리액트가 성능을 높이고, 정확한 동작을 하게 한다.
         */
        lis.push(<li key={t.id}>
            <a id={t.id} href={'/read/'+t.id} onClick={(e) => {
                e.preventDefault();
                props.onChangeMode(e.target.id);
            }}>{t.title}</a>
        </li>);
    }
    return <nav>
        <ol>
            {lis}
        </ol>
    </nav>
}

function Article(props) {
    return <article>
        <h2>{props.title}</h2>
        {props.body}
    </article>
}

function App() {
    const topics = [
        {
            id: 1,
            title: 'html',
            body: 'html is ...'
        },
        {
            id: 2,
            title: 'css',
            body: 'css is ...'
        },
        {
            id: 3,
            title: 'javascript',
            body: 'javascript is ...'
        },
    ]
    return (
        <div>
            <Header title="REACT" onChangeMode={() => {
                alert('Header');
            }}></Header>
            <Nav topics={topics} onChangeMode={(id) => {
                alert(id);
            }}></Nav>
            <Article title="Welcome" body="Hello, WEB"></Article>
        </div>
    );
}

export default App;
