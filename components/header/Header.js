import { Container, Text } from "@nextui-org/react";
export default function Header() {
    return (
        <Container style={{ height: "100%", marginTop: "25vh" }}>
            <Text
                h1
                size={60}
                weight="bold"
                style={{ display: "inline" }}
            >Build</Text>
            <Text
                h1
                size={60}
                weight="bold"
                style={{ display: "inline" }}
                css={{
                    textGradient: "45deg, $purple600 -20%, $pink600 100%",
                }}
            > your</Text>
            <Text h1
                size={60}
                weight="bold"
                style={{ display: "inline" }}
            > website
            </Text>
            <Text h1
                size={60}
                weight="bold"
            > today
            </Text>
        </Container>
    );
}