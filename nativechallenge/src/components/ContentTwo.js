import React from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';

class ContentTwo extends React.Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem>
                            <Thumbnail square size={80} source={} />
                            <Body>
                                <Text>Sankhadeep</Text>
                                <Text note>Its time to build a difference . .</Text>
                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

export default ContentTwo;
