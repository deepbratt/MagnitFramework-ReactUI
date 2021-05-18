import Grid from "@material-ui/core/Grid";
import QuoteCard from "../QuoteCard";

const CardSlyder = ({ cardData }) => {
  return (
    <>
      <Grid container direction="row" spacing={2}>
        {cardData &&
          cardData
            .filter((card, idx) => idx < 3)
            .map((card, index) => (
              <Grid item xs={12} md={4} lg={4}>
                <QuoteCard key={index} cardData={card} />
              </Grid>
            ))}
      </Grid>
    </>
  );
};

export default CardSlyder;
