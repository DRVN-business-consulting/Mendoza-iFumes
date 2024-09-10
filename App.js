import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView, Switch, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
	let [isDarkTheme, setIsDarkTheme] = React.useState(false);
	let [themeColor, setThemeColor] = React.useState('red');
	let [currentPage, setCurrentPage] = React.useState('list');
	let [selected, setSelected] = React.useState(null);
	const playList = [
		{
			id: '0',
			title: 	'Kung San ka masaya',
			artist: 'Bandang Lapis',
			img: '../assets/images/kung_saan.png'
		},
		{
			id: '1',
			title: 	'Rescue Me',
			artist: 'Sabrina Carpenter',
			img: '../assets/images/rescue-me.png'
		},
		{
			id: '2',
			title: 'Pantropiko',
			artist: 'Bini',
			img: '../assets/images/bini.png'
		},
	];

	// const selectSong = (event) => {
	// 	setCurrentPage(value => 'play');
	// 	console.log(event);
	// }

	return (
		<SafeAreaView 
			style={[styles.container,
				(isDarkTheme ? styles.backgroundDark : styles.background),
				themeColor.includes("red") && styles.redColor,
				themeColor.includes("yellow") && styles.yellowColor,
				themeColor.includes("blue") && styles.blueColor,
		]}>
			{/* <Image source={ require('./assets/icons/ic_left.png')}
				style={{ width: 50, height: 50, tintColor: "red" }}></Image> */}
				<StatusBar style="auto" />
				<Text
					style={[
						styles.logoStyle,
						themeColor.includes("red") && styles.redColor,
						themeColor.includes("yellow") && styles.yellowColor,
						themeColor.includes("blue") && styles.blueColor,]}>
							IFUMES
							<Image
								source={ require('./assets/icons/ic_music.png')}
								style={[
									themeColor.includes("red") && styles.redColor,
									themeColor.includes("yellow") && styles.yellowColor,
									themeColor.includes("blue") && styles.blueColor,
									{width: 40, height: 40} ]}></Image></Text>
				<Text style={styles.newline}/>
				<Switch value={isDarkTheme} onValueChange={setIsDarkTheme} />
				<Text style={styles.newline}/>
				<FlatList
					style = {[{
						width: "100%"
					},
					(currentPage === 'list' ? styles.show : styles.hide)]}
					data = {playList}
					renderItem={ ({item}) => (
						<TouchableOpacity 
							onPress={() => [
								setSelected(item),
								setCurrentPage('play'),
							]}
							style={[
								styles.FlatList,
								themeColor.includes("red") && styles.flatListRed,
								themeColor.includes("yellow") && styles.flatListYellow,
								themeColor.includes("blue") && styles.flatListBlue,]}>
							<Text style={[(isDarkTheme ? styles.titleTextDark : styles.titleText)]}>{item.title}</Text>
							<Text style={[(isDarkTheme ? styles.artistTextDark : styles.artistText)]}>{item.artist}</Text>
						</TouchableOpacity>
						
					)}></FlatList>
				<View
					style = {[styles.container,
						(isDarkTheme ? styles.backgroundDark : styles.background), {
						width: "100%",
						padding: 20
					},
					(currentPage === 'play' ? styles.show : styles.hide)]}
				>
					<Text style={[(isDarkTheme ? styles.titleTextDark : styles.titleText)]}>{selected?.title ? selected.title : ''}</Text>
					
					<TouchableOpacity
						onPress={() => setCurrentPage('list')}
						style = {{
								paddingHorizontal: 14,
								paddingVertical: 8,
								borderRadius: 16,
								backgroundColor: 'gray',
								width: "80%",
								marginTop: 20,
						}}>
						<Text style={[ {fontSize: 24, color : "white", textAlign: "center"}]}>Back to List</Text>
					</TouchableOpacity>
				</View>
				<Text style={[(isDarkTheme ? styles.titleTextDark : styles.titleText)]}>Change Color</Text>
				<TouchableOpacity
					onPress={() => setThemeColor('red')}
					style = {{
							paddingHorizontal: 14,
							paddingVertical: 8,
							borderRadius: 16,
							backgroundColor: 'red',
							width: "80%",
							marginTop: 20,
					}}>
					<Text style={[ {fontSize: 24, color : "white", textAlign: "center"}]}>Change to Red</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setThemeColor('yellow')}
					style = {{
							paddingHorizontal: 14,
							paddingVertical: 8,
							borderRadius: 16,
							backgroundColor: 'yellow',
							width: "80%",
							marginTop: 20,
					}}>
					<Text style={[ {fontSize: 24, color : "black", textAlign: "center"}]}>Change to yellow</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setThemeColor('blue')}
					style = {{
							paddingHorizontal: 14,
							paddingVertical: 8,
							borderRadius: 16,
							backgroundColor: 'blue',
							width: "80%",
							marginTop: 20,
					}}>
					<Text style={[ {fontSize: 24, color : "white", textAlign: "center"}]}>Change to blue</Text>
				</TouchableOpacity>
		</SafeAreaView>
		
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	FlatList: {
		padding: 20,
		borderWidth: 1
	},
	flatListRed: {
		borderTopColor: 'red',
		borderBottomColor: 'red',
	},
	flatListYellow: {
		borderTopColor: 'yellow',
		borderBottomColor: 'yellow',
	},
	flatListBlue: {
		borderTopColor: 'blue',
		borderBottomColor: 'blue',
	},
	logoStyle: {
		fontSize: 50,
		fontStyle: "italic",
		marginTop:20
	},
	background: {
		backgroundColor: '#fff'
	},
	backgroundDark: {
		backgroundColor: "#000"
	},
	newline: {
		marginVertical: 12,
	},
	titleText: {
		fontSize: 25
	},
	titleTextDark: {
		fontSize: 25,
		color: 'white',
	},
	artistText: {
		fontSize:15
	},
	artistTextDark: {
		fontSize:15,
		color: 'white',
	},
	redColor: {
		color: "red",
		tintColor: "red"
	},
	yellowColor: {
		color: "yellow",
		tintColor: "yellow"
	},
	blueColor: {
		color: "blue",
		tintColor: "blue"
	},
	show: {
		display: "block"
	},
	hide: {
		display: "none"
	},
});
