import React,{useState} from 'react'
import { View, Text,TextInput,FlatList,TouchableOpacity,Image } from 'react-native'
import { useRouter } from 'expo-router'
import {icons,SIZES} from '../../../constants'
import styles from './welcome.style'
const jobTypes=['Full-time','Part-time','Contractor']
const Welcome = () => {
  const router=useRouter();
  const [activeJobType,setActiveJobType]=useState('Full-time')
  return (
    <View>
        <View style={styles.container}>
          <Text style={styles.userName}>
              Hello Omar
          </Text>
          <Text style={styles.welcomeMessage}>
              Find Your Dream Job
          </Text>
        </View>
        <View style={styles.searchContainer}>
          <View style={styles.searchWrapper}>
            <TextInput style={styles.searchInput}
            value='Search for jobs'
            onChange={()=>{}}
            placeholder='what are you loo  for '

            />
            
          </View>
          <TouchableOpacity
          style={styles.searchBtn}
          onPress={()=>{}}
          >
              <Image
              source={icons.search}
              style={styles.searchBtnImage}
              resizeMode='contain'
              />
          </TouchableOpacity>
        </View>
        <View style={styles.tabsContainer}>
            <FlatList  data={jobTypes}
            renderItem={({item})=>(
              <TouchableOpacity
              style={styles.tab(activeJobType,item)}
              onPress={()=>{
                setActiveJobType(item);
                router.push(`/search/${item}`)
              }}
              >
               <Text style={styles.tabText(activeJobType,item)}>{item}</Text>

                </TouchableOpacity>
              )}
                keyExtractor={item=>item}
                contentContainerStyle={{columnGap:SIZES.small}}
                horizontal
            />
        </View>
    </View>
  )
}

export default Welcome