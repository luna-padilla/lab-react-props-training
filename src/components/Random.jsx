function Random({ min, max }) {
  const minimun = Math.min(min, max);
  const maximun = Math.max(min, max);
  const random = Math.floor(Math.random() * (maximun - minimun + 1)) + minimun;

  return (
    <>
      <p>
        Random value between {minimun} and {maximun} =&gt; {random}
      </p>
    </>
  );
}
export default Random;