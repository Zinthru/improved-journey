import {GetChirps,DeleteChirp,GetChirp,UpdateChirp,CreateChirp} from '../utilites/chirpstore';
import * as fs from 'fs';

//not finished


const chirp_data='chirps.json';

const getChirps = () => {
    return new Promise<[]>((resolve, reject) => {
        fs.readFile(chirp_data, (err, data) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                resolve(JSON.parse(data.toString()));
            }
        })
    })
}


const getChirp = (id: number) => {
   
    return new Promise((resolve, reject) => {
        fs.readFile(chirp_data, (err, data) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                const all_chirps: [] = JSON.parse(data.toString());
                const single_chirp = all_chirps.find(emp => emp.id === id);
                if (single_chirp) {
                    resolve(single_chirp);
                } else {
                    reject('No chirps found');
                }
            }
        })
    })
}



const deleteChirps = (id) => {
    const currentChirps = await getChirp();
    const chirpIndex = currentChirps.findIndex(emp => emp.id === id);

    currentChirps.splice(chirpIndex);

    return new Promise<>((resolve, reject) => {
        fs.writeFile(chirp_data, JSON.stringify(currentChirps), (err) => {
            if (err) {
                console.log(err);
                reject(err);
            } else {
                if (!ChirpIndex) {
                    reject('No chirp found')
                } else {
                    resolve({ message: 'Chirp deleted.' });
                }
            }
        });
    });
}



const postChirps = (text) => {
    return new Promise((resolve, reject) => {
         => {
            if (err) reject(err);
            resolve(results);
        })
    });
}

export {
getChirp,
getChirps,
deleteChirps,
postChirps
}