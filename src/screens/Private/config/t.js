/* This file has been downloaded from rnexamples.com */
/* If You want to help us please go here https://www.rnexamples.com/help-us */
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native'
import { ZonesManagement } from "../Store"
function ContactsList() {
   const [contacts, setContacts] = useState([])
   const [searchText, setSearchText] = useState('')
   const [filteredContacts, setFilteredContacts] = useState(contacts)

   const handleSearch = text => {
      setSearchText(text)
      //  const filtered = contacts.filter(contact => {
      //    return contact.name.toLowerCase().includes(text.toLowerCase())
      //  })
      //  setFilteredContacts(filtered)
   }
   const onSubmit = async (text) => {

      var newzone = await ZonesManagement.CreateZones(text)
      console.log(newzone)
      getlistContact()
      //  const filtered = contacts.filter(contact => {
      //    return contact.name.toLowerCase().includes(text.toLowerCase())
      //  })
      //  setFilteredContacts(filtered)
   }
   const getlistContact = async () => {

      var listzone = await ZonesManagement.getListZones()
      setFilteredContacts(listzone)
      console.log(listzone)

   }
   const DeleteZones = async (text) => {

      var listzone = await ZonesManagement.deleteZone(text)
      getlistContact()
      console.log(listzone)

   }
   useEffect(() => {
      getlistContact()

   }, [])



   return (
      <View style={styles.container}>
         <TouchableOpacity style={[styles.button,{backgroundColor:"#7f7f82"}]}>
            <Text style={styles.buttonText}>Site</Text>
         </TouchableOpacity>
         <View style={styles.searchContainer}>
            <TextInput
               style={styles.searchInput}
               placeholder="New Code Accouting"
               value={searchText}
               onChangeText={handleSearch}
            />
         </View>
         <View style={styles.card}>
            <TouchableOpacity style={styles.Buttons} onPress={() => onSubmit(searchText)}>
               <Text style={styles.buttonText}>submit</Text>
            </TouchableOpacity>
         </View>
         <FlatList
            data={filteredContacts}
            renderItem={({ item }) => (
               <View style={styles.itemContainer}>
                  <View style={styles.textContainer}>
                     <Text style={styles.nameText}>{item}</Text>
                     {/* <Text style={styles.phoneText}>{item}</Text> */}
                  </View>
                  <TouchableOpacity onPress={() => DeleteZones(item)} style={styles.textContainer}>

                     <Image style={styles.image} source={{ uri: "https://i.ibb.co/w4KzXj6/delete.jpg" }} />
                  </TouchableOpacity>
               </View>
            )}
            keyExtractor={item => item.id}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
   searchContainer: {
      backgroundColor: '#eee',
      marginTop: 10,
   },
   searchInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      padding: 8,
   },
   Buttons: {
      backgroundColor: '#00CED1',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      alignItems:"center",
      alignContent:"center",
      marginLeft:60
      
   },
   buttonText: {
      color: '#fff',
      fontWeight: 'bold',
      textAlign:"center"
    },
   card: {
      width: '80%',
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 20,
      shadowColor: '#00CED1',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
   },
   input: {
      flex: 1,
      fontSize: 18,
   },
   button: {
      backgroundColor: '#00CED1',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      width:"100%"
   },
   itemContainer: {
      flex: 1,
      flexDirection: "row",
      alignItems: 'space-between',
      justifyContent: 'space-between',

      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#eee',
   },
   image: {
      width: 48,
      height: 48,
      borderRadius: 24,
   },
   textContainer: {
      marginLeft: 16,
   },
   nameText: {
      fontSize: 20,
      fontWeight: 'bold',
   },
   phoneText: {
      fontSize: 16,
      color: '#999',
   },
})
export default ContactsList 