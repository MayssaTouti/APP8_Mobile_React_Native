import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Button, Card, Paragraph, Title } from 'react-native-paper'
import Colors from '../../../constants/Colors';
import { ScrollView } from 'react-native';
import AppHeader from '../../components/AppHeader';
const data = [
  { id: '1', title: 'Taj Mahal', image: "https://lp-cms-production.imgix.net/2020-11/GettyRF_494057771.jpg", favorite: true, description: 'This mausoleum complex in Agra, India, is regarded as one of the world’s most iconic monuments and is perhaps the finest example of Mughal architecture. It was built by Emperor Shah Jahān (reigned 1628–58) to honor his wife Mumtāz Maḥal (“Chosen One of the Palace”), who died in 1631 giving birth to their 14th child. It took about 22 years and 20,000 workers to construct the complex, which includes an immense garden with a reflecting pool. The mausoleum is made of white marble that features semiprecious stones in geometric and floral patterns. Its majestic central dome is surrounded by four smaller domes. According to some reports, Shah Jahān wished to have his own mausoleum made out of black marble. However, he was deposed by one of his sons before any work began.' },
  { id: '2', title: 'Great Wall of China', image: "https://cdn.britannica.com/82/94382-050-20CF23DB/Great-Wall-of-China-Beijing.jpg", favorite: true, description: 'Great might be an understatement. One of the world’s largest building-construction projects, the Great Wall of China is widely thought to be about 5,500 miles (8,850 km) long; a disputed Chinese study, however, claims the length is 13,170 miles (21,200 km). Work began in the 7th century BCE and continued for two millennia. Although called a “wall,” the structure actually features two parallel walls for lengthy stretches. In addition, watchtowers and barracks dot the bulwark. One not-so-great thing about the wall, however, was its effectiveness. Although it was built to prevent invasions and raids, the wall largely failed to provide actual security. Instead, scholars have noted that it served more as “political propaganda.”' },
  { id: '3', title: 'Chichén Itzá', image: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6f/10/a9.jpg", favorite: true, description: 'Chichén Itzá is a Mayan city on the Yucatán Peninsula in Mexico, which flourished in the 9th and 10th centuries CE. Under the Mayan tribe Itzá—who were strongly influenced by the Toltecs—a number of important monuments and temples were built. Among the most notable is the stepped pyramid El Castillo (“The Castle”), which rises 79 feet (24 meters) above the Main Plaza. A testament to the Mayans’ astronomical abilities, the structure features a total of 365 steps, the number of days in the solar year. During the spring and autumnal equinoxes, the setting sun casts shadows on the pyramid that give the appearance of a serpent slithering down the north stairway; at the base is a stone snake head. Life there was not all work and science, however. Chichén Itzá is home to the largest tlachtli (a type of sporting field) in the Americas. On that field the residents played a ritual ball game popular throughout pre-Columbian Mesoamerica.' },

]
const CardItem = ({ item }) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <Card style={styles.cardStyle}>
      <Card.Cover source={{ uri: item.image }} />
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph numberOfLines={showMore ? 0 : 2}>{item.description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button>Like</Button>
        <Button>Share</Button>
        <Button onPress={() => setShowMore(!showMore)}>{showMore ? "Show Less" : "Read More"}</Button>


      </Card.Actions>



    </Card>



  )

}







const HomeScreens = ({ navigation, route }) => {
  return (
    <ScrollView>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => item.id + index.toString()}
          contentContainerStyle={{ paddingBottom: 20 }}
          ListHeaderComponent={
            <AppHeader
              title={route.name} headerBg={Colors.green} iconColor={Colors.black}
              menu titleAlight="center" optionalBadge={5} navigation={navigation}
              right="more-vertical" rightFunction={() => console.log('right')}
              optionalIcon="bell" optionalFunc={() => console.log('optional')}
            />
          }
          renderItem={({ item }) => (
            <CardItem item={item} />
          )} />



      </View>
    </ScrollView>

  );
};

export default HomeScreens
const styles = StyleSheet.create({
  cardStyle: {
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10,
  }
})