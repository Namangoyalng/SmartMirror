/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	electronOptions: {
		webPreferences: {
			webViewTag: true
		}
	},	
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		// {
		// 	module: "alert",
		// },
		// {
		// 	module: "updatenotification",
		// 	position: "top_bar"
		// },
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Indian Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/33/India_Holidays.ics"
					},
					{
						symbol: "MyCalendar",
						url: "https://calendar.google.com/calendar/ical/magicmirroripec%40gmail.com/public/basic.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "New Delhi",
				locationID: "1261481", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "" // insert api key
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "New Delhi",
				locationID: "1261481", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "" // insert api key
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "The Hindu",
						url: "https://www.thehindu.com/news/national/delhi/feeder/default.rss"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
		    disabled: true,
		    module: "MMM-BMW-OW",
		    position: "bottom_bar", // designed for bottom_bar(best) thirds should be good too
		    config: {
			api: "", // Get at https://openweathermap.org/price
			ownTitle: "Current Conditions",
			lat: '43.574794', // Your latitude
			lon: '-77.112454', // Your longitude
			css: "2", // 1-6
			playSounds: "no",
			useHeader: false, // true if you want a header
			header: "Your header",
			maxWidth: "100%",
			updateInterval: 1 * 30 * 1000,
		    }
		},
		{
		  module: "MMM-Detector",
		  position: "top_left",
		  configDeepMerge: true,
		  config: {
		    debug: false,
		  }
		},
		{
		  module: "MMM-GoogleAssistant",
		  position: "top_left",
		  configDeepMerge: true,
		  config: {
		    debug: false,
		    assistantConfig: {
		  lang: "en-US",
		  latitude: 28.6692, //add your location coordinates
		  longitude: 77.4538,
		},
		 responseConfig: {
		  useFullscreen: true,
		  useResponseOutput: true,
		  responseOutputCSS: "response_output.css",
		  screenOutputTimer: 5000,
		  activateDelay: 250,
		  useAudioOutput: true,
		  useChime: true,
		  confirmationChime: true,
		  useInformations: true
		},
		micConfig: {},
		    Extented: {
		      deviceName: "smart-mirror",
		      useEXT: true,
		      stopCommand: "stop",
		      youtube: {
			useYoutube: true,
			  youtubeCommand: "youtube",
			  displayResponse: true,
			  useVLC: true,
			  minVolume: 30,
			  maxVolume: 100
			},
		      links: {
			 useLinks: true,
			  displayDelay: 10 * 1000,
			  scrollActivate: false,
			  scrollStep: 25,
			  scrollInterval: 1000,
			  scrollStart: 5000
			},
		      photos: {
			usePhotos: false,
			  useGooglePhotosAPI: false,
			  displayType: "none",
			  displayDelay: 10 * 1000,
			  albums: [],
			  sort: "new",
			  hiResolution: true,
			  timeFormat: "DD/MM/YYYY HH:mm",
			  moduleHeight: 300,
			  moduleWidth: 300,
			},
		      welcome: {
			useWelcome: false,
			  welcome: "brief today"
			},
		      cast: {
			useCast: true,
			  port: 8000
			},
		      spotify: {
			useSpotify: true,
			visual: {
				updateInterval: 1000,
				idleInterval: 10000,
				useBottomBar: false,
				CLIENT_ID: "", // insert api client_id here
				CLIENT_SECRET: "", // insert client secret here
			},
			player: {
			  type: "Librespot",
			  email: "", // insert e-mail id here
			  password: "", // insert password here
			  minVolume: 10,
			  maxVolume: 90,
			  usePause: true
			}
		      },
		    },
		    recipes: ["ExtSpotify.js", "with-BackgroundStatus.js"],
		    NPMCheck: {}
		  }
		},


	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
