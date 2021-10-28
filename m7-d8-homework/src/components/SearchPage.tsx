import {Form, Button} from "react-bootstrap"
import DropDownTable from "./DropDownTable"
import { useState, ChangeEvent, useEffect } from "react"


const SearchPage = () => {
const [searchQuery, setSearchQuery] = useState("")
const [musicData, setMusicData] = useState<any[]>([])
const baseString : string = "https://striveschool-api.herokuapp.com/api/deezer/search?q="

const handleSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
setSearchQuery(e.target.value)
}

useEffect(() => {
    const fetchMusic = async () => {
        try {
           const response = await fetch (baseString + searchQuery) 
           if (response.ok){
            const musicData = await response.json()
            console.log(musicData)
            const musicDataArray : Array<object> = musicData.data
            setMusicData(musicDataArray)
           }
           
        } catch (error) {
        console.log(error)    
        }
    }; fetchMusic()
}, [searchQuery])

    




return (
    <div>
    <h1 className="mb-15 text-center"> Welcome to Strive Music</h1>
    <Form className="d-flex searchBar">
        <Form.Control type="text" placeholder="Search here for your music..." className="mr-2" value={searchQuery} onChange={handleSearchQuery}/>
        <Button variant="outline-light"  >Search</Button>
    </Form>
    {musicData && musicData.map(result => { return <DropDownTable picture={result.album.cover_small} title={result.title} artist={result.artist.name}/>})
    }
 </div>   
)
}

export default SearchPage