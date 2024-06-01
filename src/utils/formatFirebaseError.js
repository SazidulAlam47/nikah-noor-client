const formatFirebaseError = (err) => {
    const firebaseError = err.message
        .match(/Firebase: Error \(auth\/(\S+)\)./)[1]
        .replace(/-/g, " "); // extract the error message

    const firebaseErrorCapitalized =
        firebaseError.charAt(0).toUpperCase() +
        firebaseError.slice(1); // make it capitalized

    return firebaseErrorCapitalized;
}

export default formatFirebaseError;