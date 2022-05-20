export const updateRecords = (...args) => {
  const collection = {
    2548: {
      album: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name'],
    },
    2468: {
      album: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette'],
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: [],
    },
    5439: {
      album: 'ABBA Gold',
    },
  };

  const collectionCopy = JSON.parse(JSON.stringify(collection));
  const [idAlbum, property, value] = args;
  if (property !== 'tracks') {
    if (value !== '') {
      collectionCopy[idAlbum][property] = value;
    } else if (collectionCopy[idAlbum][property] !== undefined) {
      delete collectionCopy[idAlbum][property];
    }
  } else if (collectionCopy[idAlbum][property] !== undefined) {
    if (value !== '') {
      collectionCopy[idAlbum][property].push(value);
    } else {
      delete collectionCopy[idAlbum][property];
    }
  } else if (value !== '') {
    collectionCopy[idAlbum][property] = [];
    collectionCopy[idAlbum][property].push(value);
  }

  return collectionCopy;
};
