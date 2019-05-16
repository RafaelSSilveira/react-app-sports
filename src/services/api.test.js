import ApiService from './api.service';

jest.setTimeout(40000);

it('getRandomDayOfWeek', () => {
  let allDays = ApiService.getAllDayOfWeek().map(el => { return el.description });
  let days = ApiService.getRandomDayOfWeek();

  expect(Array.isArray(days)).toBeTruthy()
  days.forEach(day => {
    expect(typeof day).toBe('string');
    expect(allDays.includes(day)).toBeTruthy();
  });
});

it('getRandomRideInGroup', () => {
  let allRideInGroup = ApiService.getAllRideInGroup();
  let rideInGroup = ApiService.getRandomRideInGroup();

  expect(typeof rideInGroup).toBe('string');
  expect(allRideInGroup.includes(rideInGroup)).toBeTruthy();
});

it('getAllRideInGroup', () => {
  let rideInGroup = ApiService.getAllRideInGroup();

  expect(Array.isArray(rideInGroup)).toBeTruthy();
  rideInGroup.forEach(el => expect(typeof el).toBe('string'));
});

it('getAllDayOfWeek', () => {
  let daysOfWeek = ApiService.getAllDayOfWeek();

  expect(Array.isArray(daysOfWeek)).toBeTruthy();
  daysOfWeek.forEach(el => {
    expect(typeof el.description).toBe('string');
    expect(typeof el.multiple).toBe('boolean');
  });
});

it("getUsers", async (done) => {
  let users = await ApiService.getUsers();
  expect(Array.isArray(users)).toBeTruthy();
  expect(users.length).toBeGreaterThan(0);

  let user = users[0];
  expect(typeof user).toBe('object');
  expect(user.hasOwnProperty('id')).toBeTruthy();
  expect(user.hasOwnProperty('name')).toBeTruthy();
  expect(user.hasOwnProperty('username')).toBeTruthy();
  expect(user.hasOwnProperty('email')).toBeTruthy();
  expect(user.hasOwnProperty('address')).toBeTruthy();
  expect(user.address.hasOwnProperty('city')).toBeTruthy();
  expect(user.hasOwnProperty('posts')).toBeTruthy();
  expect(user.hasOwnProperty('albums')).toBeTruthy();
  expect(user.hasOwnProperty('photos')).toBeTruthy();
  expect(user.hasOwnProperty('daysOfWeek')).toBeTruthy();
  expect(user.hasOwnProperty('rideInGroup')).toBeTruthy();

  done();
});

it('saveUser', (done) => {
  let rideInGroup = ApiService.getRandomRideInGroup();
  let daysOfWeek = ApiService.getRandomDayOfWeek();
  ApiService.saveUser('User 1', 'user1', 'user1@user.com', 'São Paulo', rideInGroup, daysOfWeek)
    .then(data => {
      expect(data).toBeTruthy();
    });

  done();
});

it('getAlbums', async (done) => {
  let albums = await ApiService.getAlbums(1);
  expect(Array.isArray(albums)).toBeTruthy();
  expect(albums.length).toBeGreaterThan(0);

  let album = albums[0];
  expect(typeof album).toBe('object');
  expect(album.hasOwnProperty('id')).toBeTruthy();
  expect(album.hasOwnProperty('userId')).toBeTruthy();
  expect(album.hasOwnProperty('title')).toBeTruthy();
  done();
})