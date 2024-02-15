import React from 'react'

function importAll(r, folder) {
    // return an object containing an array of each image name,
    // as well as a method to return the relative filepath of each image.
    const data = {
        imgs: [],
        getFilePath: function(index) {
            const imgName = this.imgs[index];
            if (folder.charAt(folder.length - 1) === '/') {
                return folder + imgName;
            }
            else {
                return folder + '/' + imgName;
            }
        }
    }
    data.imgs = r.keys().map((fileName) => (
        fileName.substr(2)
    ))
    return data;
}

// import all images from the given directory
// NOTE: The first parameter of require.context() and the second parameter of importAll() should be the same.
const backgroundImgs = importAll(require.context('./resources/backgrounds', false, /\.(png|jpe?g|svg)$/), './resources/backgrounds');

export default function Background({ settings, children, className }) {
    let backgroundPath = backgroundImgs.getFilePath(settings.backgroundIndex);
    console.log('from Background: ' + settings.back)
    return (
        <div className={className} style={{backgroundImage: `url(${backgroundPath}`}}>
            {children}
        </div>
    )
}
