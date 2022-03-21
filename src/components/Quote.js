import { IconButton } from "@chakra-ui/react";
import { RepeatIcon, SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Box, Container, Stack, Text } from "@chakra-ui/layout";

function Quote(props) {
  const { darkMode, toggleColorMode, getRandomQuote, quote, author } = props;

  return (
    <Container>
      <Box p={8} m={5} boxShadow="lg" bg={darkMode ? "gray.900" : "white"}>
        <Box color={darkMode ? "gray.300" : "gray.500"} my={-1} align={"right"}>
          <IconButton size="xs" variant="ghost" onClick={getRandomQuote}>
            <RepeatIcon />
          </IconButton>
          <IconButton size="xs" variant="ghost" onClick={toggleColorMode}>
            {darkMode ? <MoonIcon /> : <SunIcon />}
          </IconButton>
        </Box>
        <Stack>
          <Text
            color={darkMode ? "gray.200" : "gray.700"}
            fontWeight={600}
            fontSize="4xl"
          >
            {quote}
          </Text>
          <Text color={darkMode ? "gray.300" : "gray.500"} align={"right"}>
            {author}
          </Text>
        </Stack>
      </Box>
    </Container>
  );
}

export default Quote;
