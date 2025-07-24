// pages/api/ping-wp.js
export default async function handler(req, res) {
  try {
    const response = await fetch('https://ekopramudi.lovestoblog.com/index.php?graphql');
    const status = response.status;
    res.status(200).json({ status });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
