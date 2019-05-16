import * as endpoint from '../utils/endpoint';
import { extractAsyncData } from '../utils/extract';
import RideInGroupMock from './mocks/rideInGroup'
import DayOfWeekMock from './mocks/dayOfWeek'

class ApiService {

  users = [];

  /**
   * @description Get users
   * @returns Promise
   */
  getUsers = async () => {
    if (this.users.length === 0) {
      let users = await extractAsyncData(endpoint.USERS);
      for (let i = 0; i < users.length; i++) {
        users[i] = await this._getExtraUserInfo(users[i]);
      }

      this.users = users;
      return users;
    } else {
      return this.users;
    }
  }

  /**
   * @param {Number} userId
   * @description Get albuns
   * @returns Promise
   */
  getAlbums = (userId) => {
    return extractAsyncData(`${endpoint.ALBUMS}?userId=${userId}`);
  }

  /**
 * @param {Number} albumId
 * @description Get photos
 * @returns Promise
 */
  getPhotos = (albumId) => {
    return extractAsyncData(`${endpoint.PHOTOS}?albumId=${albumId}`);
  }

  /**
   * @param {Number} userId
   * @description Get albuns
   * @returns Promise
   */
  getPosts = (userId) => {
    return extractAsyncData(`${endpoint.POSTS}?userId=${userId}`);
  }

  /**
   * @description Get random Ride in Group Labels
   * @returns String[]
   */
  getRandomRideInGroup() {
    return RideInGroupMock.random();
  }

  /**
   * @description Get Random Day Of Week Labels
   * @returns String[]
   */
  getRandomDayOfWeek() {
    return DayOfWeekMock.random();
  }

  getAllRideInGroup() {
    return RideInGroupMock.labels;
  }

  getAllDayOfWeek() {
    return DayOfWeekMock.labels;
  }

  /**
   * 
   * @param {String} name 
   * @param {String} username 
   * @param {String} email 
   * @param {String} city 
   * @param {Array of RideInGroup} rideInGroup 
   * @param {Array of DaysOfWeek} daysOfWeek 
   * @returns Promise<boolean>
   */
  async saveUser(name, username, email, city, rideInGroup, daysOfWeek) {
    let user = {
      name,
      username,
      email,
      address: {
        street: '',
        suite: '',
        city,
        zipcode: ''
      },
      rideInGroup,
      daysOfWeek,
      photos: [],
      albums: [],
      posts: []
    }

    return new Promise((resolve, reject) => {
      this.users.unshift(user);
      resolve(true);
    })
  }

  /**
 * @param {User} user
 * @description Get more information about the user "Post, Albums, Photos, Days Of Week and Ride in Group"
 */
  _getExtraUserInfo = async (user) => {
    user.daysOfWeek = this.getRandomDayOfWeek();
    user.rideInGroup = this.getRandomRideInGroup();
    user.albums = await this.getAlbums(user.id);
    user.posts = await this.getPosts(user.id);
    user.photos = [];
    user.albums.forEach(album => {
      this.getPhotos(album.id).then(photos => {
        user.photos = [
          ...user.photos,
          ...photos
        ]
      });
    })
    return user;
  }
}

export default new ApiService();