function Song(source, title, artist, description, album, id) {
    this.source = source;
    this.title = title;
    this.description = description;
    this.id = id;
    this.artist = artist;
    this.album = album;
  }

  const songs = [
    new Song('/Nirvana.mp3', 'Nirvana', "Sam Smith",'No information available', "https://images.rapgenius.com/b967568959fc8e7df4a39a8947f70c2b.960x960x1.jpg", 0),
    new Song('/My Imagination.mp3', 'My Imagination', "Majid Jordan Ft. DVSN", "My Imagination is a single from singer-producer duo, Majid Jordans' album, The Space Between", "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/68/75/5f/68755f0c-eaa7-1826-a31d-7aab30b8e3bb/093624909248.jpg/268x0w.jpg", 1),
    new Song('/Naked.mp3', 'Naked', "James Arthur", 'No information available', "https://pointlessthoughts534.files.wordpress.com/2017/07/itunes-unknown-album.png?w=213&h=213", 2),
    new Song('/In The Name Of Love.mp3', 'In The Name of Love', 'Martin Garrix', 'No information available',"https://i.scdn.co/image/a1a2e08be66df92c75e46ad8330c9d4937bff209", 3),
    new Song('/Thief.mp3', 'Thief', 'Ookay', 'No information available', 'https://d3us2i0tqwa7m7.cloudfront.net/pulses/17337344460510000/1467213445524_res_original.jpg', 4),
    new Song('/Psycho.mp3', 'Psycho', 'Post Malone Ft. Ty Dolla $ign', "Post Malone's latest single featuring Ty Dolla $ign", "https://pointlessthoughts534.files.wordpress.com/2017/07/itunes-unknown-album.png?w=213&h=213", 5),
    new Song('/Alive.mp3', 'Alive', 'Madden', 'No information available', "https://images.genius.com/10026a73893c124b0912a4a8cec7b1c7.1000x1000x1.jpg", 6),
    new Song('/Nikki.mp3', 'Nikki ', 'Logic', 'Album: Under Pressure', "https://images.rapgenius.com/173eb4ef41076a126d6e432e76460d43.1000x1000x1.jpg", 7),
    new Song('/1-800-273-8255.mp3', '1-800-273-8255', 'Logic', 'No information available', "https://images.genius.com/8547782914f9e616dd58d1f889f60604.672x671x1.jpg",8),
    new Song('/Clarity.mp3', 'Clarity', 'Zedd Ft. Foxes', "Zedd's no. 1 hit featuring Foxes", "https://2.bp.blogspot.com/-oJcdjSsRJ30/UveFwl73XWI/AAAAAAAAANs/1tjYEGB-6lY/s1600/clarityfoxes.jpg",9),
  ]

  module.exports = songs