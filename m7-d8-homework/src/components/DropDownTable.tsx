import {Row, Col} from "react-bootstrap"

interface Music {
    title: string,
    artist: string,
    picture: string
}

const DropDownTable = (props: Music) => {
    return (
<Row className="mx-0 mt-3 p-3" id="margin" style={{ border: '1px solid #00000033', borderRadius: 4, borderColor: "black" }}>
            <Col xs={2} className="d-flex text-white">
                <img src={props.picture} />
            </Col>
            <Col xs={4} className="d-flex text-white">
                {props.title}
            </Col>
            <Col xs={3} className="d-flex text-white">
                {props.artist}
            </Col>
        </Row>
    )
}

export default DropDownTable