const CardHeadline = ({title, hr = 'yes'}: {title: string, hr?: string}) => {
  return (
    <>
      <h1 className="text-lg font-bold">{title}</h1>

      {hr === "yes" && <hr />}
    </>
  );
}

export default CardHeadline
