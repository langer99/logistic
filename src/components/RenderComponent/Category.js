import * as React from "react"
import { Image, Text, TouchableOpacity,View } from "react-native";
import { Colors } from "../../core/theme";
const Categorie = ({item,onpress, isSelected}) => {
  return (
    <TouchableOpacity  onPress={()=>onpress(item)} style={{ marginLeft: 10,
      borderWidth: 1,
      borderColor:Colors.secondary, borderRadius:10, backgroundColor:isSelected===item.id?Colors.gray:Colors.info}}>
      <Image
        source={{uri:"https://i.ibb.co/Wtf5HWw/Screenshot-from-2024-02-16-10-44-44.png"}}
        style={{
          width: 100,
          height: 100,
          borderRadius: 20,
          overflow: "hidden",
          marginTop:2,
         
        }}
        resizeMode="cover"
      />
      <View style={{ alignContent:"center",textAlign: "center"}}>
        <Text
          style={{ textAlign: "center", fontWeight: "700", marginTop: 3,color:Colors.black }}
          ellipsizeMode={"tail"}
        >
          {item?.name}
        </Text>
        <Text
          style={{ textAlign: "center", fontWeight: "500", fontSize:10, color:Colors.black}}
          ellipsizeMode={"tail"}
        >
          {item?.address_ip}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Categorie;
