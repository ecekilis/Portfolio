export const getImageUrl = (imageName) => {
    return new URL(`../../assets/projects/${imageName}`, import.meta.url).href;
};