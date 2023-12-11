import { Text, View, Pressable, TextInput } from "react-native"
import { StyleSheet } from "react-native"
import { useState } from "react"
import { useEffect } from "react"

import RNFS from "react-native-fs"

const List = () => {
    // const [imagePath, setImagePath] = useState(null)

    // const downloadImage = async (imageUrl) => {
    //     const localFile = `${RNFS.DocumentDirectoryPath}/downloadedImage.jpg`
    //     const options = {
    //         fromUrl: imageUrl,
    //         toFile: localFile,
    //     }
    //     try {
    //         await RNFS.downloadFile(options).promise
    //         console.log(`image downloaded to ${localFile}`)
    //     } catch (error) {
    //         console.error(error)
    //     }
    // }
    // downloadImage(
    //     "https://www.google.com/url?sa=i&url=https%3A%2F%2Ff7dobry.com%2Fpsy-w-helmach-z-arbuza%2F&psig=AOvVaw2vTXnlSBDCc06H3K_rWy3j&ust=1702414208205000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCPD7s6OhiIMDFQAAAAAdAAAAABAI"
    // )

    // useEffect(() => {
    //     // Load image from local file system
    //     loadImage()
    // }, [])

    const loadImage = async () => {
        try {
            // Specify the path to the image file on the local device
            const path = RNFS.DocumentDirectoryPath + "/your_image_filename.jpg"

            // Check if the file exists
            const fileExists = await RNFS.exists(path)

            if (fileExists) {
                // Set the image path to display the image
                setImagePath("file://" + path)
            } else {
                console.log("Image not found")
            }
        } catch (error) {
            console.error("Error loading image:", error)
        }
    }
    return (
        <View>
            <Text>cos</Text>
        </View>
    )
}

// const ListItem = ({name, price, amount})=>{
//     return (
//     <>
//         <Text>
//             {name}
//         </Text>
//                 <Text>
//                 {price}
//             </Text>
//                     <Text>
//                     {amount}
//                 </Text>

//     </>

//     )
// }

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: "cover",
    },
})

export default List
