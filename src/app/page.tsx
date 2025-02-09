import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import NextLink from "next/link";

export default function Home() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        py: 8,
        display: "grid",
        gridTemplateRows: "20px 1fr 20px",
        gap: 4,
      }}
    >
      <Box
        component="main"
        sx={{
          gridRow: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
        }}
      >
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <Stack
          component="ol"
          spacing={2}
          sx={{ listStyleType: "decimal", listStylePosition: "inside" }}
        >
          <Typography component="li" variant="body2" fontFamily="monospace">
            Get started by editing{" "}
            <Box
              component="code"
              sx={{
                px: 1,
                py: 0.5,
                borderRadius: 1,
                bgcolor: "rgba(0,0,0,0.05)",
                ".dark &": { bgcolor: "rgba(255,255,255,0.06)" },
                fontWeight: 600,
              }}
            >
              src/app/page.tsx
            </Box>
            .
          </Typography>
          <Typography component="li" variant="body2" fontFamily="monospace">
            Save and see your changes instantly.
          </Typography>
        </Stack>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button
            variant="contained"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            startIcon={
              <Image
                className="dark:invert"
                src="/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
            }
          >
            Deploy now
          </Button>
          <Button>Test</Button>
          <Button
            variant="outlined"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </Button>
        </Stack>
      </Box>

      <Stack
        component="footer"
        direction="row"
        spacing={3}
        sx={{
          gridRow: 3,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Link
          component={NextLink}
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            "&:hover": {
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            },
          }}
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </Link>
        <Link
          component={NextLink}
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            "&:hover": {
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            },
          }}
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </Link>
        <Link
          component={NextLink}
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            "&:hover": {
              textDecoration: "underline",
              textUnderlineOffset: "4px",
            },
          }}
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </Link>
      </Stack>
    </Container>
  );
}
