import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import * as React from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { Text, View, StyleSheet } from 'react-native';
import axios from 'axios';
const baseUrl =
    'https://open-darwin.opendata.arcgis.com/datasets/6d6453a83bbc4ab8b7591e545dd40d65_0.geojson';
export default function Businesses() {
    // grab the darwin street food api (and at the moment) log the data to the console. TO DO: grab the data and assign to variables which we can then display in the app.

    axios({
        method: 'get',
        url: `${baseUrl}`,
    }).then((response) => {
        console.log(response.data);
    });
    // eslint-disable-next-line no-unused-vars
    const [items, setItems] = React.useState([
        { name: 'TURQUOISE', code: '#1abc9c' },
        { name: 'EMERALD', code: '#2ecc71' },
        { name: 'PETER RIVER', code: '#3498db' },
    ]);
    return (
        <FlatGrid
            itemDimension={130}
            data={items}
            spacing={10}
            renderItem={({ item }) => (
                <View
                // style={[
                //     styles.itemContainer,
                //     { backgroundColor: item.code },
                // ]}
                >
                    {/* <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemCode}>{item.code}</Text> */}

                    <Card>
                        <Card.Title title={item.name} />
                        <Card.Content></Card.Content>
                        <Card.Cover style={{ backgroundColor: item.code }} />
                    </Card>
                </View>
            )}

            //  <Card>
            //             {/* <Card.Title
            //                 title="Salty Plum Cafe"
            //                 subtitle="Card Subtitle"
            //                 left={leftContent}
            //             /> */}
            //             <Card.Content>
            //                 <Title>Salty Plum Cafe</Title>
            //                 <Paragraph>Open Now</Paragraph>
            //             </Card.Content>
            //             <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
            //             <Card.Actions>
            //                 {/* <Button>Cancel</Button> */}
            //                 <Button>Ok</Button>
            //             </Card.Actions>
            //         </Card>
        />
    );
}

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({
    gridView: {
        marginTop: 10,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});
