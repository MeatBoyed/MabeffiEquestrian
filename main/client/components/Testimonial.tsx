import { Card, CardHeader, CardContent } from "./ui/card";
import Typography from "./ui/Typography";

export default function Testimonial({ name, body }: { name: string, body: string }) {
    return (
        <Card>
            <CardHeader>
                <Typography variant={"h3"}>{name}</Typography>
            </CardHeader>

            <CardContent>
                <Typography variant={"p"}>
                    {body}
                </Typography>
            </CardContent>
        </Card>
    )
}