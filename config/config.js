function setConfigs() {
    console.log("Enter config");
    process.env.MONGO_CONNECTION = 'mongodb://mayurgpt07:nokiac202@ds019766.mlab.com:19766/node_insta';
    process.env.CLOUDINARY_URL = 'cloudinary://555372827684749:hasqJzQpdEEnRiZMPW8XaY8HMuA@mayurcloud';
}

module.exports = setConfigs;