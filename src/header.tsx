import headshotImg from './assets/headshot.jpg'

function Header() {


    return (
        <>
            <section id = "test">
                <img src={headshotImg} className="base" width="170" height="179" alt="" />
                <div>
                    <h2>Tyler Guarda</h2>
                    <p>Jersey City, NJ | Phone: +1-908-455-2431</p>
                </div>
            </section>
        </>
    )
}

export default Header