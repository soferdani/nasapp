import { Card , Button} from "react-bootstrap";


export default function MediaCard({ data }) {
    console.log(data);
    return (
        <div className='MediaCard'>
            <Card className='text-center'>
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        {data.explanation}
                    </Card.Text>
                    <Button variant="primary">change this</Button>
                </Card.Body>
                <Card.Img variant="bottom" src={data.url} />
            </Card>
        </div>
    );
}