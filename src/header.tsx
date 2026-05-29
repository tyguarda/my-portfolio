import headshotImg from './assets/headshot.jpg'

function Header() {



    return (
        <>
            <section id = "test">
            <img src={headshotImg} className="base" width="170" height="179" alt="" />
            <div>
                <h1>Greetings</h1>
            </div>
            </section>
        </>
    )
}

export default Header