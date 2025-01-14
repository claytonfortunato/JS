const loginUserPromise = (email, password) => {
    return new Promise((resolve, reject) => {
        const error = false;

        if (error) {
            reject (new Error("error in login!"));
        }

        console.log("user logged!");
        resolve({ email });
    });
};

const getUserVideos = (email) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (["video1", "video2", "video3"])
        }, 2000);
    });
};

const getVideoDetails = (video) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ title: "video title"});
        }, 2500);
    });
};

// loginUser("clayton@gmail.com", "1234567")
//     .then((user) => getUserVideos(user.email))
//     .then((videos) => getVideoDetails(videos[0]))
//     .catch((error) => console.log({ error }));

// Promise.all
const yt = new Promise ((resolve) => {
    setTimeout(() => {
        resolve("videos from youtube");
    }, 2000);
});

const fb = new Promise ((resolve) => {
    setTimeout(() => {
        resolve ("posts from facebook");
    }, 5000);
});

Promise.all([yt, fb]).then((result) => {
    console.log( { result} );
});