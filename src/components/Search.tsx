import { useState } from "react";
import { SearchContainer, Input, Button, SuggestionsList } from "../styles/GlobalStyles";
import { FaSearch } from "react-icons/fa";

const cities = [
  "New York", "Los Angeles", "Chicago", "Houston", "Miami", "San Francisco", "Seattle", "Boston", "Denver", "Las Vegas",
  "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata",
  "Pune", "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane",
  "Bhopal", "Visakhapatnam", "Patna", "Vadodara", "Ghaziabad", "Ludhiana",
  "Agra", "Nashik", "Ranchi", "Meerut", "Guwahati", "Chandigarh", "Coimbatore",
  "Mysore", "Dehradun", "Jodhpur", "Raipur", "Kochi", "Amritsar", "Gwalior",
  "Vijayawada", "Madurai", "Varanasi", "Allahabad", "Aurangabad", "Jabalpur",
  "Noida", "Thiruvananthapuram", "Bhubaneswar", "Salem", "Warangal",
  "Tiruchirappalli", "Bareilly", "Aligarh", "Moradabad", "Guntur", "Bikaner",
  "Bhilai", "Jamshedpur", "Cuttack", "Firozabad", "Kollam", "Ujjain", "Nellore",
  "Jammu", "Srinagar", "Belgaum", "Mangalore", "Dhanbad", "Rourkela", "Ajmer",
  "Kolhapur", "Jhansi", "Tirunelveli", "Siliguri", "Muzaffarpur", "Gaya",
  "Hubli", "Kozhikode", "Udaipur", "Bilaspur", "Mathura", "Sholapur", "Latur",
  "Kurnool", "Anantapur", "Satna", "Kakinada", "Davangere"
];


type Props = {
  onSearch: (city: string) => void;
};

const Search = ({ onSearch }: Props) => {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity("");
      setSuggestions([]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value);
    if (value) {
      setSuggestions(cities.filter((c) => c.toLowerCase().includes(value.toLowerCase())));
    } else {
      setSuggestions([]);
    }
  };

  const selectSuggestion = (city: string) => {
    setCity(city);
    setSuggestions([]);
    onSearch(city);
  };

  return (
    <SearchContainer>
      <Input
        type="text"
        placeholder="Search for your preferred city..."
        value={city}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />

      <Button onClick={handleSearch}>
        <FaSearch />
      </Button>

      {suggestions.length > 1 && (
        <SuggestionsList>
          {suggestions.map((suggestion) => (
            <li key={suggestion} onClick={() => selectSuggestion(suggestion)}>
              {suggestion}
            </li>
          ))}
        </SuggestionsList>
      )}
    </SearchContainer>
  );
};

export default Search;
