const INITIAL_STATE = {
    sections: [{
        title:'hats',
        imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
        id:1,
        linkUrl: 'hats'
    },{
        title:'jackets',
        imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
        id:2,
        linkUrl: ''
    },{
        title:'sneakers',
        imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
        id:3,
        linkUrl: ''
    },{
        title: "women's",
        imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
        size: 'large',
        id:4,
        linkUrl: ''
    },{
        title:"men's",
        imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png',
        size: 'large',
        id:5,
        linkUrl: ''
    }]
};

const directoryReducer = (rootReducerState = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return rootReducerState
    }
};

export default directoryReducer;