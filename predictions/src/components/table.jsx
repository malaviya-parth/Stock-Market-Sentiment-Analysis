import { Button, Card, IconButton, Typography, CardFooter, CardBody } from "@material-tailwind/react";
import { useEffect, useState } from "react";
 
const TABLE_HEAD = ["News", "Sentimet"];
 

 
export function Table() {

  const [news, setNews] = useState([]);
  const [sentiment, setSentiment] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ROWS_PER_PAGE = 10;

  const fetchData = async () => {
    const response = await fetch("/data");
    // console.log(response);
    const data = await response.json();
    // console.log(Object.keys(data));
    setNews(Object.keys(data));
    setSentiment(Object.values(data));
  };

  // console.log(news);
  // console.log(sentiment);

  useEffect(() => {
    fetchData();
  }, []);

  const totalPages = Math.ceil(news.length / ROWS_PER_PAGE);
  const startIndex = (currentPage - 1) * ROWS_PER_PAGE;
  const endIndex = startIndex + ROWS_PER_PAGE;

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Card className="h-full w-full bg-blue-100 rounded-xl">
      <CardBody>
      <table className="w-full min-w-max table-auto text-left bg-blue-800 rounded-xl">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="mt-2 border-y border-blue-700 bg-blue-200 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="leading-none opacity-70 text-lg text-black font-semibold"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
            {news.slice(startIndex, endIndex).map((newsItem, index) => (
              <tr key={newsItem} className={sentiment[startIndex + index] === "Positive" ? "bg-light-green-200" : "bg-red-200"}>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {newsItem}
                  </Typography>
                </td>
                <td className="p-4">
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {sentiment[startIndex + index]}
                  </Typography>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-black-50 p-4">
        <Button
          variant="outlined"
          color="blue"
          size="sm"
          className="bg-white"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <div className="flex items-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <IconButton
              key={page}
              variant={page === currentPage ? "outlined" : "text"}
              color="blue"
              size="sm"
              className="bg-white"
              onClick={() => handlePageChange(page)}
            >
              {page}
            </IconButton>
          ))}
        </div>
        <Button
          variant="outlined"
          color="blue"
          size="sm"
          className="bg-white"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}