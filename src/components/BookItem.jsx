import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export const BookItem = ({ book }) => {
  return (
    <Card sx={{ maxWidth: 300, m: 2, p: 2, boxShadow: 3 }}>
      <CardMedia
        component="img"
        image={book.cover_i ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` : ""}
        alt={book.title}
        sx={{ height: 200, width: '100%', objectFit: 'contain', mb: 1 }}
      />
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
         Title: {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Author Name: {book.author_name ? book.author_name[0] : 'Unknown author'}
        </Typography>
      </CardContent>
    </Card>
  );
};
