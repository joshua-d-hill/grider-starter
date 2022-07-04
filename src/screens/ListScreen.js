import React from 'react';
import { Text, StyleSheet, View, FlatList} from 'react-native';

const ListScreen = () => {

  const partyMembers = [
    {name: 'Chandan', class: 'Cleric', race: 'Dwarf'},
    {name: 'Alex', class: 'Sorcerer', race: 'Elf'},
    {name: 'Shah Newaz', class: 'Monk', race: 'Human'},
    {name: 'Shovon', class: 'Wizard', race: 'Gnome'},
    {name: 'Garrett', class: 'Paladin', race: 'Half-Orc'},
    {name: 'Saima', class: 'Druid', race: 'Minotaur'},
    {name: 'Tashfiqul', class: 'Bard', race: 'Owlbear'},
    {name: 'John', class: 'Ranger', race: 'Centaur'}
  ]

  return (
    <View>
    <Text style={styles.headerStyle}>Adventurer Party List</Text>
    <FlatList 
      showsHorizontalScrollIndicator={false}
      keyExtractor={(partyMember) => partyMember.name}
      data = {partyMembers} 
      renderItem = {({ item }) => {

        return <Text style={styles.textStyle}>
            {item.name}, {item.race} {item.class}
            </Text>

        // consoleLog:
        // item === { name: 'partyMember #1' }
        // element === { item: { name: 'partyMember #1' }, index: 0 }
      }}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 5,
    marginHorizontal: 5,
    fontSize: 20,
    color: '#06bcee'
  },
  headerStyle: {
    fontSize: 25,
    color: '#e524ca'
  }
}); 

export default ListScreen;