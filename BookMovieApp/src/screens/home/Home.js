import React, { useEffect,useState } from "react";
import Header from "../../common/header/Header";
import "./Home.css"
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';



const Home = function () {
    const [subscribersList, setSubscribersList] = useState([]);
    async function loadData() {

        const rawResponse = await fetch("http://localhost:8085/api/v1/movies")
        const data = await rawResponse.json()
        setSubscribersList(data);
        console.log(setSubscribersList(data))

       
        //fetch("http://localhost:7081/api/contacts")
        // .then(input=>input.json())
        // .then(data=>setSubscribersList(data))


    }

   


    useEffect(() => {
        loadData();
    }, [])

    return (
        <div>
            <Header />
            <div>
                <div className="home-header-area-container">
                    <p className="home-area-text">Upcoming Movies</p>
                </div>
                <div className="row">
                    <GridList cellHeight={250} cols={6} style={{ width: 800, height: 300 }}>
                        <GridListTile>
                        <img src="https://r1.ilikewallpaper.net/iphone-x-wallpapers/download/76119/Chinatown-New-York-United-States-iphone-x-wallpaper-ilikewallpaper_com_200.jpg" alt="" />
                        <GridListTileBar
                            title={'tile.title'}
                           
                    
                        />

                        </GridListTile>
                        
                    </GridList>
                </div>
                <div className="movies-search-result-container row">
                    <div style={{width:'70%'}}>
                    <img src="https://r1.ilikewallpaper.net/iphone-x-wallpapers/download/76119/Chinatown-New-York-United-States-iphone-x-wallpaper-ilikewallpaper_com_200.jpg" alt="" />
                    </div>
                    <div style={{width:"30%"}}>
                    <img src="https://r1.ilikewallpaper.net/iphone-x-wallpapers/download/76119/Chinatown-New-York-United-States-iphone-x-wallpaper-ilikewallpaper_com_200.jpg" alt="" />
                    </div>
                </div>

                
            </div>

        </div>
    )
}

export default Home;