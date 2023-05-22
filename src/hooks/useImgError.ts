export default (default_src: string) => {
  const checkImgExists = (img_url: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      const img_obj = new Image();
      img_obj.src = img_url;
      img_obj.onload = (res) => {
        resolve(res);
      };
      img_obj.onerror = (err) => {
        reject(err);
      };
    });
  };

  const handleError = (e: any) => {
    const { target } = e;
    checkImgExists(target.src).catch(() => {
      target.src = default_src;
    });
  };

  return {
    handleError
  };
};
