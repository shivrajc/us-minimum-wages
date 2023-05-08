// import { readable } from "svelte/store";
import { writable } from "svelte/store";

const data = writable(
  [
    {
      "year": 2021,
      "state_code": "AL",
      "state_name": "Alabama",
      "total": 1.8,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 1.3,
      "row": 7,
      "col": 7
    },
    {
      "year": 2020,
      "state_code": "AL",
      "state_name": "Alabama",
      "total": 2.5,
      "at_minimum_age": 1.3,
      "below_minimum_wage": 1.2,
      "row": 7,
      "col": 7
    },
    {
      "year": 2019,
      "state_code": "AL",
      "state_name": "Alabama",
      "total": 2.7,
      "at_minimum_age": 0.8,
      "below_minimum_wage": 1.9,
      "row": 7,
      "col": 7
    },
    {
      "year": 2018,
      "state_code": "AL",
      "state_name": "Alabama",
      "total": 3.1,
      "at_minimum_age": 1.5,
      "below_minimum_wage": 1.5,
      "row": 7,
      "col": 7
    },
    {
      "year": 2017,
      "state_code": "AL",
      "state_name": "Alabama",
      "total": 3.4,
      "at_minimum_age": 2.2,
      "below_minimum_wage": 1.2,
      "row": 7,
      "col": 7
    },
    {
      "year": 2016,
      "state_code": "AL",
      "state_name": "Alabama",
      "total": 3.5,
      "at_minimum_age": 1.7,
      "below_minimum_wage": 1.9,
      "row": 7,
      "col": 7
    },
    {
      "year": 2015,
      "state_code": "AL",
      "state_name": "Alabama",
      "total": 5.6,
      "at_minimum_age": 3.4,
      "below_minimum_wage": 2.2,
      "row": 7,
      "col": 7
    },
    {
      "year": 2021,
      "state_code": "AK",
      "state_name": "Alaska",
      "total": 0.6,
      "at_minimum_age": 0,
      "below_minimum_wage": 0.6,
      "row": 1,
      "col": 1
    },
    {
      "year": 2020,
      "state_code": "AK",
      "state_name": "Alaska",
      "total": 1.6,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 1.5,
      "row": 1,
      "col": 1
    },
    {
      "year": 2019,
      "state_code": "AK",
      "state_name": "Alaska",
      "total": 1,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 0.9,
      "row": 1,
      "col": 1
    },
    {
      "year": 2018,
      "state_code": "AK",
      "state_name": "Alaska",
      "total": 0.8,
      "at_minimum_age": 0,
      "below_minimum_wage": 0.8,
      "row": 1,
      "col": 1
    },
    {
      "year": 2017,
      "state_code": "AK",
      "state_name": "Alaska",
      "total": 1.2,
      "at_minimum_age": 0.6,
      "below_minimum_wage": 0.5,
      "row": 1,
      "col": 1
    },
    {
      "year": 2016,
      "state_code": "AK",
      "state_name": "Alaska",
      "total": 0.7,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 0.4,
      "row": 1,
      "col": 1
    },
    {
      "year": 2015,
      "state_code": "AK",
      "state_name": "Alaska",
      "total": 1.2,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 0.8,
      "row": 1,
      "col": 1
    },
    {
      "year": 2021,
      "state_code": "AZ",
      "state_name": "Arizona",
      "total": 0.4,
      "at_minimum_age": 0,
      "below_minimum_wage": 0.4,
      "row": 6,
      "col": 2
    },
    {
      "year": 2020,
      "state_code": "AZ",
      "state_name": "Arizona",
      "total": 1,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 0.8,
      "row": 6,
      "col": 2
    },
    {
      "year": 2019,
      "state_code": "AZ",
      "state_name": "Arizona",
      "total": 1.5,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 1.2,
      "row": 6,
      "col": 2
    },
    {
      "year": 2018,
      "state_code": "AZ",
      "state_name": "Arizona",
      "total": 1,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 0.9,
      "row": 6,
      "col": 2
    },
    {
      "year": 2017,
      "state_code": "AZ",
      "state_name": "Arizona",
      "total": 1.8,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1.6,
      "row": 6,
      "col": 2
    },
    {
      "year": 2016,
      "state_code": "AZ",
      "state_name": "Arizona",
      "total": 2.4,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 2,
      "row": 6,
      "col": 2
    },
    {
      "year": 2015,
      "state_code": "AZ",
      "state_name": "Arizona",
      "total": 2.7,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 2.3,
      "row": 6,
      "col": 2
    },
    {
      "year": 2021,
      "state_code": "AR",
      "state_name": "Arkansas",
      "total": 0.6,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 0.4,
      "row": 6,
      "col": 5
    },
    {
      "year": 2020,
      "state_code": "AR",
      "state_name": "Arkansas",
      "total": 1.4,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 1.2,
      "row": 6,
      "col": 5
    },
    {
      "year": 2019,
      "state_code": "AR",
      "state_name": "Arkansas",
      "total": 2.2,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 1.8,
      "row": 6,
      "col": 5
    },
    {
      "year": 2018,
      "state_code": "AR",
      "state_name": "Arkansas",
      "total": 1.5,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 1.1,
      "row": 6,
      "col": 5
    },
    {
      "year": 2017,
      "state_code": "AR",
      "state_name": "Arkansas",
      "total": 1.8,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 1.4,
      "row": 6,
      "col": 5
    },
    {
      "year": 2016,
      "state_code": "AR",
      "state_name": "Arkansas",
      "total": 2.6,
      "at_minimum_age": 0.8,
      "below_minimum_wage": 1.8,
      "row": 6,
      "col": 5
    },
    {
      "year": 2015,
      "state_code": "AR",
      "state_name": "Arkansas",
      "total": 3.1,
      "at_minimum_age": 1.4,
      "below_minimum_wage": 1.7,
      "row": 6,
      "col": 5
    },
    {
      "year": 2021,
      "state_code": "CA",
      "state_name": "California",
      "total": 0.5,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 0.4,
      "row": 5,
      "col": 1
    },
    {
      "year": 2020,
      "state_code": "CA",
      "state_name": "California",
      "total": 0.6,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 0.5,
      "row": 5,
      "col": 1
    },
    {
      "year": 2019,
      "state_code": "CA",
      "state_name": "California",
      "total": 0.9,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 0.7,
      "row": 5,
      "col": 1
    },
    {
      "year": 2018,
      "state_code": "CA",
      "state_name": "California",
      "total": 1,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 0.7,
      "row": 5,
      "col": 1
    },
    {
      "year": 2017,
      "state_code": "CA",
      "state_name": "California",
      "total": 0.5,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 0.4,
      "row": 5,
      "col": 1
    },
    {
      "year": 2016,
      "state_code": "CA",
      "state_name": "California",
      "total": 1,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 0.8,
      "row": 5,
      "col": 1
    },
    {
      "year": 2015,
      "state_code": "CA",
      "state_name": "California",
      "total": 1.2,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 0.9,
      "row": 5,
      "col": 1
    },
    {
      "year": 2021,
      "state_code": "CO",
      "state_name": "Colorado",
      "total": 0.4,
      "at_minimum_age": 0,
      "below_minimum_wage": 0.4,
      "row": 5,
      "col": 3
    },
    {
      "year": 2020,
      "state_code": "CO",
      "state_name": "Colorado",
      "total": 0.6,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 0.5,
      "row": 5,
      "col": 3
    },
    {
      "year": 2019,
      "state_code": "CO",
      "state_name": "Colorado",
      "total": 1,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 0.8,
      "row": 5,
      "col": 3
    },
    {
      "year": 2018,
      "state_code": "CO",
      "state_name": "Colorado",
      "total": 1.6,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 1.3,
      "row": 5,
      "col": 3
    },
    {
      "year": 2017,
      "state_code": "CO",
      "state_name": "Colorado",
      "total": 1.7,
      "at_minimum_age": 0,
      "below_minimum_wage": 1.7,
      "row": 5,
      "col": 3
    },
    {
      "year": 2016,
      "state_code": "CO",
      "state_name": "Colorado",
      "total": 2.3,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 2,
      "row": 5,
      "col": 3
    },
    {
      "year": 2015,
      "state_code": "CO",
      "state_name": "Colorado",
      "total": 1.8,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 1.5,
      "row": 5,
      "col": 3
    },
    {
      "year": 2021,
      "state_code": "CT",
      "state_name": "Connecticut",
      "total": 0.5,
      "at_minimum_age": 0,
      "below_minimum_wage": 0.5,
      "row": 4,
      "col": 10
    },
    {
      "year": 2020,
      "state_code": "CT",
      "state_name": "Connecticut",
      "total": 1.2,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 0.8,
      "row": 4,
      "col": 10
    },
    {
      "year": 2019,
      "state_code": "CT",
      "state_name": "Connecticut",
      "total": 1.7,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 1.4,
      "row": 4,
      "col": 10
    },
    {
      "year": 2018,
      "state_code": "CT",
      "state_name": "Connecticut",
      "total": 1.6,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1.6,
      "row": 4,
      "col": 10
    },
    {
      "year": 2017,
      "state_code": "CT",
      "state_name": "Connecticut",
      "total": 1.5,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1.5,
      "row": 4,
      "col": 10
    },
    {
      "year": 2016,
      "state_code": "CT",
      "state_name": "Connecticut",
      "total": 1.9,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 1.7,
      "row": 4,
      "col": 10
    },
    {
      "year": 2015,
      "state_code": "CT",
      "state_name": "Connecticut",
      "total": 2.9,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 2.6,
      "row": 4,
      "col": 10
    },
    {
      "year": 2021,
      "state_code": "DE",
      "state_name": "Delaware",
      "total": 2.4,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 2.1,
      "row": 5,
      "col": 10
    },
    {
      "year": 2020,
      "state_code": "DE",
      "state_name": "Delaware",
      "total": 2.4,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 2.4,
      "row": 5,
      "col": 10
    },
    {
      "year": 2019,
      "state_code": "DE",
      "state_name": "Delaware",
      "total": 2.2,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 2.1,
      "row": 5,
      "col": 10
    },
    {
      "year": 2018,
      "state_code": "DE",
      "state_name": "Delaware",
      "total": 1.9,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 1.6,
      "row": 5,
      "col": 10
    },
    {
      "year": 2017,
      "state_code": "DE",
      "state_name": "Delaware",
      "total": 2.9,
      "at_minimum_age": 0.8,
      "below_minimum_wage": 2.1,
      "row": 5,
      "col": 10
    },
    {
      "year": 2016,
      "state_code": "DE",
      "state_name": "Delaware",
      "total": 2.3,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 1.8,
      "row": 5,
      "col": 10
    },
    {
      "year": 2015,
      "state_code": "DE",
      "state_name": "Delaware",
      "total": 2.6,
      "at_minimum_age": 0.7,
      "below_minimum_wage": 1.9,
      "row": 5,
      "col": 10
    },
    {
      "year": 2021,
      "state_code": "DC",
      "state_name": "District of Columbia",
      "total": 2.5,
      "at_minimum_age": 0.6,
      "below_minimum_wage": 2,
      "row": 6,
      "col": 9
    },
    {
      "year": 2020,
      "state_code": "DC",
      "state_name": "District of Columbia",
      "total": 1.8,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 1.6,
      "row": 6,
      "col": 9
    },
    {
      "year": 2019,
      "state_code": "DC",
      "state_name": "District of Columbia",
      "total": 2.8,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 2.5,
      "row": 6,
      "col": 9
    },
    {
      "year": 2018,
      "state_code": "DC",
      "state_name": "District of Columbia",
      "total": 3.7,
      "at_minimum_age": 1.1,
      "below_minimum_wage": 2.6,
      "row": 6,
      "col": 9
    },
    {
      "year": 2017,
      "state_code": "DC",
      "state_name": "District of Columbia",
      "total": 3,
      "at_minimum_age": 0.6,
      "below_minimum_wage": 2.4,
      "row": 6,
      "col": 9
    },
    {
      "year": 2016,
      "state_code": "DC",
      "state_name": "District of Columbia",
      "total": 2.4,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 2.2,
      "row": 6,
      "col": 9
    },
    {
      "year": 2015,
      "state_code": "DC",
      "state_name": "District of Columbia",
      "total": 3,
      "at_minimum_age": 0.8,
      "below_minimum_wage": 2.2,
      "row": 6,
      "col": 9
    },
    {
      "year": 2021,
      "state_code": "FL",
      "state_name": "Florida",
      "total": 2.3,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 2.2,
      "row": 8,
      "col": 9
    },
    {
      "year": 2020,
      "state_code": "FL",
      "state_name": "Florida",
      "total": 1.8,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 1.6,
      "row": 8,
      "col": 9
    },
    {
      "year": 2019,
      "state_code": "FL",
      "state_name": "Florida",
      "total": 1.7,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1.6,
      "row": 8,
      "col": 9
    },
    {
      "year": 2018,
      "state_code": "FL",
      "state_name": "Florida",
      "total": 2.3,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 2.1,
      "row": 8,
      "col": 9
    },
    {
      "year": 2017,
      "state_code": "FL",
      "state_name": "Florida",
      "total": 2.6,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 2.5,
      "row": 8,
      "col": 9
    },
    {
      "year": 2016,
      "state_code": "FL",
      "state_name": "Florida",
      "total": 2.9,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 2.5,
      "row": 8,
      "col": 9
    },
    {
      "year": 2015,
      "state_code": "FL",
      "state_name": "Florida",
      "total": 3.8,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 3.5,
      "row": 8,
      "col": 9
    },
    {
      "year": 2021,
      "state_code": "GA",
      "state_name": "Georgia",
      "total": 2.2,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 1.9,
      "row": 7,
      "col": 8
    },
    {
      "year": 2020,
      "state_code": "GA",
      "state_name": "Georgia",
      "total": 2.1,
      "at_minimum_age": 1.1,
      "below_minimum_wage": 1,
      "row": 7,
      "col": 8
    },
    {
      "year": 2019,
      "state_code": "GA",
      "state_name": "Georgia",
      "total": 2.5,
      "at_minimum_age": 1.1,
      "below_minimum_wage": 1.4,
      "row": 7,
      "col": 8
    },
    {
      "year": 2018,
      "state_code": "GA",
      "state_name": "Georgia",
      "total": 2.3,
      "at_minimum_age": 0.8,
      "below_minimum_wage": 1.5,
      "row": 7,
      "col": 8
    },
    {
      "year": 2017,
      "state_code": "GA",
      "state_name": "Georgia",
      "total": 3.2,
      "at_minimum_age": 1.3,
      "below_minimum_wage": 1.9,
      "row": 7,
      "col": 8
    },
    {
      "year": 2016,
      "state_code": "GA",
      "state_name": "Georgia",
      "total": 3.9,
      "at_minimum_age": 1.7,
      "below_minimum_wage": 2.2,
      "row": 7,
      "col": 8
    },
    {
      "year": 2015,
      "state_code": "GA",
      "state_name": "Georgia",
      "total": 4.4,
      "at_minimum_age": 2.1,
      "below_minimum_wage": 2.3,
      "row": 7,
      "col": 8
    },
    {
      "year": 2021,
      "state_code": "HI",
      "state_name": "Hawaii",
      "total": 1,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 0.9,
      "row": 8,
      "col": 1
    },
    {
      "year": 2020,
      "state_code": "HI",
      "state_name": "Hawaii",
      "total": 0.7,
      "at_minimum_age": 0,
      "below_minimum_wage": 0.7,
      "row": 8,
      "col": 1
    },
    {
      "year": 2019,
      "state_code": "HI",
      "state_name": "Hawaii",
      "total": 1.2,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1.1,
      "row": 8,
      "col": 1
    },
    {
      "year": 2018,
      "state_code": "HI",
      "state_name": "Hawaii",
      "total": 2.2,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 1.9,
      "row": 8,
      "col": 1
    },
    {
      "year": 2017,
      "state_code": "HI",
      "state_name": "Hawaii",
      "total": 1.7,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 1.4,
      "row": 8,
      "col": 1
    },
    {
      "year": 2016,
      "state_code": "HI",
      "state_name": "Hawaii",
      "total": 1.3,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 1.1,
      "row": 8,
      "col": 1
    },
    {
      "year": 2015,
      "state_code": "HI",
      "state_name": "Hawaii",
      "total": 2.8,
      "at_minimum_age": 1.5,
      "below_minimum_wage": 1.3,
      "row": 8,
      "col": 1
    },
    {
      "year": 2021,
      "state_code": "ID",
      "state_name": "Idaho",
      "total": 2.1,
      "at_minimum_age": 0.7,
      "below_minimum_wage": 1.4,
      "row": 3,
      "col": 2
    },
    {
      "year": 2020,
      "state_code": "ID",
      "state_name": "Idaho",
      "total": 1.4,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 0.9,
      "row": 3,
      "col": 2
    },
    {
      "year": 2019,
      "state_code": "ID",
      "state_name": "Idaho",
      "total": 1.7,
      "at_minimum_age": 1,
      "below_minimum_wage": 0.7,
      "row": 3,
      "col": 2
    },
    {
      "year": 2018,
      "state_code": "ID",
      "state_name": "Idaho",
      "total": 2.3,
      "at_minimum_age": 0.8,
      "below_minimum_wage": 1.5,
      "row": 3,
      "col": 2
    },
    {
      "year": 2017,
      "state_code": "ID",
      "state_name": "Idaho",
      "total": 3.3,
      "at_minimum_age": 1,
      "below_minimum_wage": 2.3,
      "row": 3,
      "col": 2
    },
    {
      "year": 2016,
      "state_code": "ID",
      "state_name": "Idaho",
      "total": 4.6,
      "at_minimum_age": 2.1,
      "below_minimum_wage": 2.5,
      "row": 3,
      "col": 2
    },
    {
      "year": 2015,
      "state_code": "ID",
      "state_name": "Idaho",
      "total": 4.6,
      "at_minimum_age": 3.2,
      "below_minimum_wage": 1.4,
      "row": 3,
      "col": 2
    },
    {
      "year": 2021,
      "state_code": "IL",
      "state_name": "Illinois",
      "total": 1,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 0.9,
      "row": 3,
      "col": 6
    },
    {
      "year": 2020,
      "state_code": "IL",
      "state_name": "Illinois",
      "total": 1.1,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 0.9,
      "row": 3,
      "col": 6
    },
    {
      "year": 2019,
      "state_code": "IL",
      "state_name": "Illinois",
      "total": 2.5,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 2.1,
      "row": 3,
      "col": 6
    },
    {
      "year": 2018,
      "state_code": "IL",
      "state_name": "Illinois",
      "total": 1.7,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 1.4,
      "row": 3,
      "col": 6
    },
    {
      "year": 2017,
      "state_code": "IL",
      "state_name": "Illinois",
      "total": 2.5,
      "at_minimum_age": 0.6,
      "below_minimum_wage": 1.9,
      "row": 3,
      "col": 6
    },
    {
      "year": 2016,
      "state_code": "IL",
      "state_name": "Illinois",
      "total": 2.4,
      "at_minimum_age": 0.6,
      "below_minimum_wage": 1.8,
      "row": 3,
      "col": 6
    },
    {
      "year": 2015,
      "state_code": "IL",
      "state_name": "Illinois",
      "total": 3.2,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 2.7,
      "row": 3,
      "col": 6
    },
    {
      "year": 2021,
      "state_code": "IN",
      "state_name": "Indiana",
      "total": 1.8,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 1.5,
      "row": 4,
      "col": 6
    },
    {
      "year": 2020,
      "state_code": "IN",
      "state_name": "Indiana",
      "total": 1.4,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 1,
      "row": 4,
      "col": 6
    },
    {
      "year": 2019,
      "state_code": "IN",
      "state_name": "Indiana",
      "total": 1.7,
      "at_minimum_age": 0.7,
      "below_minimum_wage": 1,
      "row": 4,
      "col": 6
    },
    {
      "year": 2018,
      "state_code": "IN",
      "state_name": "Indiana",
      "total": 2.6,
      "at_minimum_age": 0.8,
      "below_minimum_wage": 1.8,
      "row": 4,
      "col": 6
    },
    {
      "year": 2017,
      "state_code": "IN",
      "state_name": "Indiana",
      "total": 3,
      "at_minimum_age": 1.2,
      "below_minimum_wage": 1.8,
      "row": 4,
      "col": 6
    },
    {
      "year": 2016,
      "state_code": "IN",
      "state_name": "Indiana",
      "total": 3.7,
      "at_minimum_age": 1.7,
      "below_minimum_wage": 2,
      "row": 4,
      "col": 6
    },
    {
      "year": 2015,
      "state_code": "IN",
      "state_name": "Indiana",
      "total": 3.9,
      "at_minimum_age": 1.8,
      "below_minimum_wage": 2.1,
      "row": 4,
      "col": 6
    },
    {
      "year": 2021,
      "state_code": "IA",
      "state_name": "Iowa",
      "total": 1.1,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1,
      "row": 4,
      "col": 5
    },
    {
      "year": 2020,
      "state_code": "IA",
      "state_name": "Iowa",
      "total": 1.4,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 0.9,
      "row": 4,
      "col": 5
    },
    {
      "year": 2019,
      "state_code": "IA",
      "state_name": "Iowa",
      "total": 2.2,
      "at_minimum_age": 0.7,
      "below_minimum_wage": 1.5,
      "row": 4,
      "col": 5
    },
    {
      "year": 2018,
      "state_code": "IA",
      "state_name": "Iowa",
      "total": 2.1,
      "at_minimum_age": 0.6,
      "below_minimum_wage": 1.5,
      "row": 4,
      "col": 5
    },
    {
      "year": 2017,
      "state_code": "IA",
      "state_name": "Iowa",
      "total": 1.7,
      "at_minimum_age": 0.7,
      "below_minimum_wage": 1,
      "row": 4,
      "col": 5
    },
    {
      "year": 2016,
      "state_code": "IA",
      "state_name": "Iowa",
      "total": 2.4,
      "at_minimum_age": 1,
      "below_minimum_wage": 1.4,
      "row": 4,
      "col": 5
    },
    {
      "year": 2015,
      "state_code": "IA",
      "state_name": "Iowa",
      "total": 3.7,
      "at_minimum_age": 1.8,
      "below_minimum_wage": 1.9,
      "row": 4,
      "col": 5
    },
    {
      "year": 2021,
      "state_code": "KS",
      "state_name": "Kansas",
      "total": 1.6,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 1.4,
      "row": 6,
      "col": 4
    },
    {
      "year": 2020,
      "state_code": "KS",
      "state_name": "Kansas",
      "total": 2.2,
      "at_minimum_age": 0.6,
      "below_minimum_wage": 1.6,
      "row": 6,
      "col": 4
    },
    {
      "year": 2019,
      "state_code": "KS",
      "state_name": "Kansas",
      "total": 2.6,
      "at_minimum_age": 0.8,
      "below_minimum_wage": 1.8,
      "row": 6,
      "col": 4
    },
    {
      "year": 2018,
      "state_code": "KS",
      "state_name": "Kansas",
      "total": 2.2,
      "at_minimum_age": 0.8,
      "below_minimum_wage": 1.3,
      "row": 6,
      "col": 4
    },
    {
      "year": 2017,
      "state_code": "KS",
      "state_name": "Kansas",
      "total": 3.2,
      "at_minimum_age": 1.1,
      "below_minimum_wage": 2.1,
      "row": 6,
      "col": 4
    },
    {
      "year": 2016,
      "state_code": "KS",
      "state_name": "Kansas",
      "total": 4.4,
      "at_minimum_age": 1.7,
      "below_minimum_wage": 2.7,
      "row": 6,
      "col": 4
    },
    {
      "year": 2015,
      "state_code": "KS",
      "state_name": "Kansas",
      "total": 4.1,
      "at_minimum_age": 2,
      "below_minimum_wage": 2.1,
      "row": 6,
      "col": 4
    },
    {
      "year": 2021,
      "state_code": "KY",
      "state_name": "Kentucky",
      "total": 2,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 1.5,
      "row": 5,
      "col": 6
    },
    {
      "year": 2020,
      "state_code": "KY",
      "state_name": "Kentucky",
      "total": 1.7,
      "at_minimum_age": 0.6,
      "below_minimum_wage": 1,
      "row": 5,
      "col": 6
    },
    {
      "year": 2019,
      "state_code": "KY",
      "state_name": "Kentucky",
      "total": 2.8,
      "at_minimum_age": 1,
      "below_minimum_wage": 1.8,
      "row": 5,
      "col": 6
    },
    {
      "year": 2018,
      "state_code": "KY",
      "state_name": "Kentucky",
      "total": 2.6,
      "at_minimum_age": 0.9,
      "below_minimum_wage": 1.7,
      "row": 5,
      "col": 6
    },
    {
      "year": 2017,
      "state_code": "KY",
      "state_name": "Kentucky",
      "total": 4.4,
      "at_minimum_age": 1.5,
      "below_minimum_wage": 3,
      "row": 5,
      "col": 6
    },
    {
      "year": 2016,
      "state_code": "KY",
      "state_name": "Kentucky",
      "total": 4.8,
      "at_minimum_age": 2.2,
      "below_minimum_wage": 2.7,
      "row": 5,
      "col": 6
    },
    {
      "year": 2015,
      "state_code": "KY",
      "state_name": "Kentucky",
      "total": 3.5,
      "at_minimum_age": 1.4,
      "below_minimum_wage": 2.1,
      "row": 5,
      "col": 6
    },
    {
      "year": 2021,
      "state_code": "LA",
      "state_name": "Louisiana",
      "total": 3.2,
      "at_minimum_age": 0.6,
      "below_minimum_wage": 2.6,
      "row": 7,
      "col": 5
    },
    {
      "year": 2020,
      "state_code": "LA",
      "state_name": "Louisiana",
      "total": 3.4,
      "at_minimum_age": 1.1,
      "below_minimum_wage": 2.3,
      "row": 7,
      "col": 5
    },
    {
      "year": 2019,
      "state_code": "LA",
      "state_name": "Louisiana",
      "total": 4.6,
      "at_minimum_age": 2.3,
      "below_minimum_wage": 2.4,
      "row": 7,
      "col": 5
    },
    {
      "year": 2018,
      "state_code": "LA",
      "state_name": "Louisiana",
      "total": 4.5,
      "at_minimum_age": 1.2,
      "below_minimum_wage": 3.3,
      "row": 7,
      "col": 5
    },
    {
      "year": 2017,
      "state_code": "LA",
      "state_name": "Louisiana",
      "total": 3.6,
      "at_minimum_age": 1.4,
      "below_minimum_wage": 2.3,
      "row": 7,
      "col": 5
    },
    {
      "year": 2016,
      "state_code": "LA",
      "state_name": "Louisiana",
      "total": 5.3,
      "at_minimum_age": 2.4,
      "below_minimum_wage": 2.8,
      "row": 7,
      "col": 5
    },
    {
      "year": 2015,
      "state_code": "LA",
      "state_name": "Louisiana",
      "total": 6.4,
      "at_minimum_age": 3.5,
      "below_minimum_wage": 2.9,
      "row": 7,
      "col": 5
    },
    {
      "year": 2021,
      "state_code": "ME",
      "state_name": "Maine",
      "total": 1.3,
      "at_minimum_age": 0,
      "below_minimum_wage": 1.3,
      "row": 1,
      "col": 11
    },
    {
      "year": 2020,
      "state_code": "ME",
      "state_name": "Maine",
      "total": 1,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 0.6,
      "row": 1,
      "col": 11
    },
    {
      "year": 2019,
      "state_code": "ME",
      "state_name": "Maine",
      "total": 1.5,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1.5,
      "row": 1,
      "col": 11
    },
    {
      "year": 2018,
      "state_code": "ME",
      "state_name": "Maine",
      "total": 1.8,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1.7,
      "row": 1,
      "col": 11
    },
    {
      "year": 2017,
      "state_code": "ME",
      "state_name": "Maine",
      "total": 2.7,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 2.3,
      "row": 1,
      "col": 11
    },
    {
      "year": 2016,
      "state_code": "ME",
      "state_name": "Maine",
      "total": 2.7,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 2.2,
      "row": 1,
      "col": 11
    },
    {
      "year": 2015,
      "state_code": "ME",
      "state_name": "Maine",
      "total": 2.7,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 2.2,
      "row": 1,
      "col": 11
    },
    {
      "year": 2021,
      "state_code": "MD",
      "state_name": "Maryland",
      "total": 1.2,
      "at_minimum_age": 0,
      "below_minimum_wage": 1.2,
      "row": 5,
      "col": 9
    },
    {
      "year": 2020,
      "state_code": "MD",
      "state_name": "Maryland",
      "total": 1.4,
      "at_minimum_age": 0,
      "below_minimum_wage": 1.4,
      "row": 5,
      "col": 9
    },
    {
      "year": 2019,
      "state_code": "MD",
      "state_name": "Maryland",
      "total": 1.7,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 1.3,
      "row": 5,
      "col": 9
    },
    {
      "year": 2018,
      "state_code": "MD",
      "state_name": "Maryland",
      "total": 2.2,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 1.9,
      "row": 5,
      "col": 9
    },
    {
      "year": 2017,
      "state_code": "MD",
      "state_name": "Maryland",
      "total": 2.7,
      "at_minimum_age": 0.8,
      "below_minimum_wage": 1.9,
      "row": 5,
      "col": 9
    },
    {
      "year": 2016,
      "state_code": "MD",
      "state_name": "Maryland",
      "total": 2.1,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 1.7,
      "row": 5,
      "col": 9
    },
    {
      "year": 2015,
      "state_code": "MD",
      "state_name": "Maryland",
      "total": 2.2,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 1.8,
      "row": 5,
      "col": 9
    },
    {
      "year": 2021,
      "state_code": "MA",
      "state_name": "Massachusetts",
      "total": 1.6,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1.6,
      "row": 3,
      "col": 10
    },
    {
      "year": 2020,
      "state_code": "MA",
      "state_name": "Massachusetts",
      "total": 1.4,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 1.2,
      "row": 3,
      "col": 10
    },
    {
      "year": 2019,
      "state_code": "MA",
      "state_name": "Massachusetts",
      "total": 1.6,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 1.2,
      "row": 3,
      "col": 10
    },
    {
      "year": 2018,
      "state_code": "MA",
      "state_name": "Massachusetts",
      "total": 1.9,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1.8,
      "row": 3,
      "col": 10
    },
    {
      "year": 2017,
      "state_code": "MA",
      "state_name": "Massachusetts",
      "total": 2.5,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 2.3,
      "row": 3,
      "col": 10
    },
    {
      "year": 2016,
      "state_code": "MA",
      "state_name": "Massachusetts",
      "total": 1.8,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 1.5,
      "row": 3,
      "col": 10
    },
    {
      "year": 2015,
      "state_code": "MA",
      "state_name": "Massachusetts",
      "total": 2.9,
      "at_minimum_age": 0.6,
      "below_minimum_wage": 2.3,
      "row": 3,
      "col": 10
    },
    {
      "year": 2021,
      "state_code": "MI",
      "state_name": "Michigan",
      "total": 1.4,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 1.2,
      "row": 3,
      "col": 7
    },
    {
      "year": 2020,
      "state_code": "MI",
      "state_name": "Michigan",
      "total": 1.5,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1.3,
      "row": 3,
      "col": 7
    },
    {
      "year": 2019,
      "state_code": "MI",
      "state_name": "Michigan",
      "total": 1.9,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 1.5,
      "row": 3,
      "col": 7
    },
    {
      "year": 2018,
      "state_code": "MI",
      "state_name": "Michigan",
      "total": 1.7,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 1.4,
      "row": 3,
      "col": 7
    },
    {
      "year": 2017,
      "state_code": "MI",
      "state_name": "Michigan",
      "total": 2.1,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 1.9,
      "row": 3,
      "col": 7
    },
    {
      "year": 2016,
      "state_code": "MI",
      "state_name": "Michigan",
      "total": 2,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 1.7,
      "row": 3,
      "col": 7
    },
    {
      "year": 2015,
      "state_code": "MI",
      "state_name": "Michigan",
      "total": 3.7,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 3.3,
      "row": 3,
      "col": 7
    },
    {
      "year": 2021,
      "state_code": "MN",
      "state_name": "Minnesota",
      "total": 1,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 0.8,
      "row": 3,
      "col": 5
    },
    {
      "year": 2020,
      "state_code": "MN",
      "state_name": "Minnesota",
      "total": 0.8,
      "at_minimum_age": 0,
      "below_minimum_wage": 0.8,
      "row": 3,
      "col": 5
    },
    {
      "year": 2019,
      "state_code": "MN",
      "state_name": "Minnesota",
      "total": 0.7,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 0.6,
      "row": 3,
      "col": 5
    },
    {
      "year": 2018,
      "state_code": "MN",
      "state_name": "Minnesota",
      "total": 0.7,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 0.6,
      "row": 3,
      "col": 5
    },
    {
      "year": 2017,
      "state_code": "MN",
      "state_name": "Minnesota",
      "total": 0.9,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 0.5,
      "row": 3,
      "col": 5
    },
    {
      "year": 2016,
      "state_code": "MN",
      "state_name": "Minnesota",
      "total": 1.2,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 0.8,
      "row": 3,
      "col": 5
    },
    {
      "year": 2015,
      "state_code": "MN",
      "state_name": "Minnesota",
      "total": 1.6,
      "at_minimum_age": 0.6,
      "below_minimum_wage": 1,
      "row": 3,
      "col": 5
    },
    {
      "year": 2021,
      "state_code": "MS",
      "state_name": "Mississippi",
      "total": 2.2,
      "at_minimum_age": 1,
      "below_minimum_wage": 1.3,
      "row": 7,
      "col": 6
    },
    {
      "year": 2020,
      "state_code": "MS",
      "state_name": "Mississippi",
      "total": 2.8,
      "at_minimum_age": 0.9,
      "below_minimum_wage": 1.9,
      "row": 7,
      "col": 6
    },
    {
      "year": 2019,
      "state_code": "MS",
      "state_name": "Mississippi",
      "total": 4,
      "at_minimum_age": 2,
      "below_minimum_wage": 2,
      "row": 7,
      "col": 6
    },
    {
      "year": 2018,
      "state_code": "MS",
      "state_name": "Mississippi",
      "total": 3,
      "at_minimum_age": 1.5,
      "below_minimum_wage": 1.5,
      "row": 7,
      "col": 6
    },
    {
      "year": 2017,
      "state_code": "MS",
      "state_name": "Mississippi",
      "total": 4.1,
      "at_minimum_age": 2.1,
      "below_minimum_wage": 2,
      "row": 7,
      "col": 6
    },
    {
      "year": 2016,
      "state_code": "MS",
      "state_name": "Mississippi",
      "total": 4.8,
      "at_minimum_age": 2.1,
      "below_minimum_wage": 2.8,
      "row": 7,
      "col": 6
    },
    {
      "year": 2015,
      "state_code": "MS",
      "state_name": "Mississippi",
      "total": 6.2,
      "at_minimum_age": 3.7,
      "below_minimum_wage": 2.5,
      "row": 7,
      "col": 6
    },
    {
      "year": 2021,
      "state_code": "MO",
      "state_name": "Missouri",
      "total": 1.4,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 1.2,
      "row": 5,
      "col": 5
    },
    {
      "year": 2020,
      "state_code": "MO",
      "state_name": "Missouri",
      "total": 1.1,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 0.8,
      "row": 5,
      "col": 5
    },
    {
      "year": 2019,
      "state_code": "MO",
      "state_name": "Missouri",
      "total": 1.7,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 1.5,
      "row": 5,
      "col": 5
    },
    {
      "year": 2018,
      "state_code": "MO",
      "state_name": "Missouri",
      "total": 2,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 1.6,
      "row": 5,
      "col": 5
    },
    {
      "year": 2017,
      "state_code": "MO",
      "state_name": "Missouri",
      "total": 2,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 1.8,
      "row": 5,
      "col": 5
    },
    {
      "year": 2016,
      "state_code": "MO",
      "state_name": "Missouri",
      "total": 2.7,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 2.3,
      "row": 5,
      "col": 5
    },
    {
      "year": 2015,
      "state_code": "MO",
      "state_name": "Missouri",
      "total": 3.6,
      "at_minimum_age": 0.8,
      "below_minimum_wage": 2.8,
      "row": 5,
      "col": 5
    },
    {
      "year": 2021,
      "state_code": "MT",
      "state_name": "Montana",
      "total": 0.8,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 0.8,
      "row": 3,
      "col": 3
    },
    {
      "year": 2020,
      "state_code": "MT",
      "state_name": "Montana",
      "total": 0.5,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 0.4,
      "row": 3,
      "col": 3
    },
    {
      "year": 2019,
      "state_code": "MT",
      "state_name": "Montana",
      "total": 0.5,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 0.5,
      "row": 3,
      "col": 3
    },
    {
      "year": 2018,
      "state_code": "MT",
      "state_name": "Montana",
      "total": 1,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 0.6,
      "row": 3,
      "col": 3
    },
    {
      "year": 2017,
      "state_code": "MT",
      "state_name": "Montana",
      "total": 0.8,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 0.7,
      "row": 3,
      "col": 3
    },
    {
      "year": 2016,
      "state_code": "MT",
      "state_name": "Montana",
      "total": 1.2,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 1,
      "row": 3,
      "col": 3
    },
    {
      "year": 2015,
      "state_code": "MT",
      "state_name": "Montana",
      "total": 2,
      "at_minimum_age": 0.7,
      "below_minimum_wage": 1.3,
      "row": 3,
      "col": 3
    },
    {
      "year": 2021,
      "state_code": "NE",
      "state_name": "Nebraska",
      "total": 1.2,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 1,
      "row": 5,
      "col": 4
    },
    {
      "year": 2020,
      "state_code": "NE",
      "state_name": "Nebraska",
      "total": 0.9,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 0.8,
      "row": 5,
      "col": 4
    },
    {
      "year": 2019,
      "state_code": "NE",
      "state_name": "Nebraska",
      "total": 1.3,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1.2,
      "row": 5,
      "col": 4
    },
    {
      "year": 2018,
      "state_code": "NE",
      "state_name": "Nebraska",
      "total": 1.6,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1.5,
      "row": 5,
      "col": 4
    },
    {
      "year": 2017,
      "state_code": "NE",
      "state_name": "Nebraska",
      "total": 1.3,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 1.1,
      "row": 5,
      "col": 4
    },
    {
      "year": 2016,
      "state_code": "NE",
      "state_name": "Nebraska",
      "total": 1.9,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 1.7,
      "row": 5,
      "col": 4
    },
    {
      "year": 2015,
      "state_code": "NE",
      "state_name": "Nebraska",
      "total": 2.3,
      "at_minimum_age": 0.7,
      "below_minimum_wage": 1.6,
      "row": 5,
      "col": 4
    },
    {
      "year": 2021,
      "state_code": "NV",
      "state_name": "Nevada",
      "total": 0.9,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 0.7,
      "row": 4,
      "col": 2
    },
    {
      "year": 2020,
      "state_code": "NV",
      "state_name": "Nevada",
      "total": 0.6,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 0.2,
      "row": 4,
      "col": 2
    },
    {
      "year": 2019,
      "state_code": "NV",
      "state_name": "Nevada",
      "total": 1.5,
      "at_minimum_age": 0.6,
      "below_minimum_wage": 0.9,
      "row": 4,
      "col": 2
    },
    {
      "year": 2018,
      "state_code": "NV",
      "state_name": "Nevada",
      "total": 1.3,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 0.9,
      "row": 4,
      "col": 2
    },
    {
      "year": 2017,
      "state_code": "NV",
      "state_name": "Nevada",
      "total": 1.4,
      "at_minimum_age": 0.7,
      "below_minimum_wage": 0.7,
      "row": 4,
      "col": 2
    },
    {
      "year": 2016,
      "state_code": "NV",
      "state_name": "Nevada",
      "total": 1.3,
      "at_minimum_age": 0.7,
      "below_minimum_wage": 0.6,
      "row": 4,
      "col": 2
    },
    {
      "year": 2015,
      "state_code": "NV",
      "state_name": "Nevada",
      "total": 2.5,
      "at_minimum_age": 1.2,
      "below_minimum_wage": 1.3,
      "row": 4,
      "col": 2
    },
    {
      "year": 2021,
      "state_code": "NH",
      "state_name": "New Hampshire",
      "total": 2.3,
      "at_minimum_age": 0,
      "below_minimum_wage": 2.3,
      "row": 2,
      "col": 11
    },
    {
      "year": 2020,
      "state_code": "NH",
      "state_name": "New Hampshire",
      "total": 1.3,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1.2,
      "row": 2,
      "col": 11
    },
    {
      "year": 2019,
      "state_code": "NH",
      "state_name": "New Hampshire",
      "total": 3.1,
      "at_minimum_age": 0.6,
      "below_minimum_wage": 2.4,
      "row": 2,
      "col": 11
    },
    {
      "year": 2018,
      "state_code": "NH",
      "state_name": "New Hampshire",
      "total": 3,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 2.7,
      "row": 2,
      "col": 11
    },
    {
      "year": 2017,
      "state_code": "NH",
      "state_name": "New Hampshire",
      "total": 2.1,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 1.6,
      "row": 2,
      "col": 11
    },
    {
      "year": 2016,
      "state_code": "NH",
      "state_name": "New Hampshire",
      "total": 3.8,
      "at_minimum_age": 0.8,
      "below_minimum_wage": 3,
      "row": 2,
      "col": 11
    },
    {
      "year": 2015,
      "state_code": "NH",
      "state_name": "New Hampshire",
      "total": 4.1,
      "at_minimum_age": 1.2,
      "below_minimum_wage": 2.9,
      "row": 2,
      "col": 11
    },
    {
      "year": 2021,
      "state_code": "NJ",
      "state_name": "New Jersey",
      "total": 1.6,
      "at_minimum_age": 0,
      "below_minimum_wage": 1.6,
      "row": 4,
      "col": 9
    },
    {
      "year": 2020,
      "state_code": "NJ",
      "state_name": "New Jersey",
      "total": 1.4,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1.3,
      "row": 4,
      "col": 9
    },
    {
      "year": 2019,
      "state_code": "NJ",
      "state_name": "New Jersey",
      "total": 1.6,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 1.1,
      "row": 4,
      "col": 9
    },
    {
      "year": 2018,
      "state_code": "NJ",
      "state_name": "New Jersey",
      "total": 2,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 1.5,
      "row": 4,
      "col": 9
    },
    {
      "year": 2017,
      "state_code": "NJ",
      "state_name": "New Jersey",
      "total": 1.5,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 1.1,
      "row": 4,
      "col": 9
    },
    {
      "year": 2016,
      "state_code": "NJ",
      "state_name": "New Jersey",
      "total": 2.6,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 2.1,
      "row": 4,
      "col": 9
    },
    {
      "year": 2015,
      "state_code": "NJ",
      "state_name": "New Jersey",
      "total": 2.8,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 2.3,
      "row": 4,
      "col": 9
    },
    {
      "year": 2021,
      "state_code": "NM",
      "state_name": "New Mexico",
      "total": 1.6,
      "at_minimum_age": 0,
      "below_minimum_wage": 1.6,
      "row": 6,
      "col": 3
    },
    {
      "year": 2020,
      "state_code": "NM",
      "state_name": "New Mexico",
      "total": 1.3,
      "at_minimum_age": 0,
      "below_minimum_wage": 1.3,
      "row": 6,
      "col": 3
    },
    {
      "year": 2019,
      "state_code": "NM",
      "state_name": "New Mexico",
      "total": 2,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 1.6,
      "row": 6,
      "col": 3
    },
    {
      "year": 2018,
      "state_code": "NM",
      "state_name": "New Mexico",
      "total": 2.8,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 2.5,
      "row": 6,
      "col": 3
    },
    {
      "year": 2017,
      "state_code": "NM",
      "state_name": "New Mexico",
      "total": 2.7,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 2.2,
      "row": 6,
      "col": 3
    },
    {
      "year": 2016,
      "state_code": "NM",
      "state_name": "New Mexico",
      "total": 2.7,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 2.4,
      "row": 6,
      "col": 3
    },
    {
      "year": 2015,
      "state_code": "NM",
      "state_name": "New Mexico",
      "total": 3.1,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 2.5,
      "row": 6,
      "col": 3
    },
    {
      "year": 2021,
      "state_code": "NY",
      "state_name": "New York",
      "total": 0.8,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 0.7,
      "row": 3,
      "col": 9
    },
    {
      "year": 2020,
      "state_code": "NY",
      "state_name": "New York",
      "total": 1,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1,
      "row": 3,
      "col": 9
    },
    {
      "year": 2019,
      "state_code": "NY",
      "state_name": "New York",
      "total": 1.4,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 1.1,
      "row": 3,
      "col": 9
    },
    {
      "year": 2018,
      "state_code": "NY",
      "state_name": "New York",
      "total": 1.5,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 1.3,
      "row": 3,
      "col": 9
    },
    {
      "year": 2017,
      "state_code": "NY",
      "state_name": "New York",
      "total": 1.8,
      "at_minimum_age": 0.7,
      "below_minimum_wage": 1.1,
      "row": 3,
      "col": 9
    },
    {
      "year": 2016,
      "state_code": "NY",
      "state_name": "New York",
      "total": 2,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 1.6,
      "row": 3,
      "col": 9
    },
    {
      "year": 2015,
      "state_code": "NY",
      "state_name": "New York",
      "total": 2.4,
      "at_minimum_age": 0.6,
      "below_minimum_wage": 1.8,
      "row": 3,
      "col": 9
    },
    {
      "year": 2021,
      "state_code": "NC",
      "state_name": "North Carolina",
      "total": 1.7,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 1.4,
      "row": 6,
      "col": 7
    },
    {
      "year": 2020,
      "state_code": "NC",
      "state_name": "North Carolina",
      "total": 1.8,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 1.3,
      "row": 6,
      "col": 7
    },
    {
      "year": 2019,
      "state_code": "NC",
      "state_name": "North Carolina",
      "total": 2.4,
      "at_minimum_age": 0.7,
      "below_minimum_wage": 1.7,
      "row": 6,
      "col": 7
    },
    {
      "year": 2018,
      "state_code": "NC",
      "state_name": "North Carolina",
      "total": 3.1,
      "at_minimum_age": 1,
      "below_minimum_wage": 2.1,
      "row": 6,
      "col": 7
    },
    {
      "year": 2017,
      "state_code": "NC",
      "state_name": "North Carolina",
      "total": 3.3,
      "at_minimum_age": 1.1,
      "below_minimum_wage": 2.2,
      "row": 6,
      "col": 7
    },
    {
      "year": 2016,
      "state_code": "NC",
      "state_name": "North Carolina",
      "total": 3.6,
      "at_minimum_age": 1.5,
      "below_minimum_wage": 2.1,
      "row": 6,
      "col": 7
    },
    {
      "year": 2015,
      "state_code": "NC",
      "state_name": "North Carolina",
      "total": 5.1,
      "at_minimum_age": 2.3,
      "below_minimum_wage": 2.8,
      "row": 6,
      "col": 7
    },
    {
      "year": 2021,
      "state_code": "ND",
      "state_name": "North Dakota",
      "total": 1.4,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1.3,
      "row": 3,
      "col": 4
    },
    {
      "year": 2020,
      "state_code": "ND",
      "state_name": "North Dakota",
      "total": 1.3,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1.2,
      "row": 3,
      "col": 4
    },
    {
      "year": 2019,
      "state_code": "ND",
      "state_name": "North Dakota",
      "total": 1.7,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 1.3,
      "row": 3,
      "col": 4
    },
    {
      "year": 2018,
      "state_code": "ND",
      "state_name": "North Dakota",
      "total": 1.5,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 1.1,
      "row": 3,
      "col": 4
    },
    {
      "year": 2017,
      "state_code": "ND",
      "state_name": "North Dakota",
      "total": 2,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 1.5,
      "row": 3,
      "col": 4
    },
    {
      "year": 2016,
      "state_code": "ND",
      "state_name": "North Dakota",
      "total": 1.6,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 1.3,
      "row": 3,
      "col": 4
    },
    {
      "year": 2015,
      "state_code": "ND",
      "state_name": "North Dakota",
      "total": 2.3,
      "at_minimum_age": 0.7,
      "below_minimum_wage": 1.6,
      "row": 3,
      "col": 4
    },
    {
      "year": 2021,
      "state_code": "OH",
      "state_name": "Ohio",
      "total": 1.3,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 1.1,
      "row": 4,
      "col": 7
    },
    {
      "year": 2020,
      "state_code": "OH",
      "state_name": "Ohio",
      "total": 1.5,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1.4,
      "row": 4,
      "col": 7
    },
    {
      "year": 2019,
      "state_code": "OH",
      "state_name": "Ohio",
      "total": 1.7,
      "at_minimum_age": 0,
      "below_minimum_wage": 1.7,
      "row": 4,
      "col": 7
    },
    {
      "year": 2018,
      "state_code": "OH",
      "state_name": "Ohio",
      "total": 2.1,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 1.9,
      "row": 4,
      "col": 7
    },
    {
      "year": 2017,
      "state_code": "OH",
      "state_name": "Ohio",
      "total": 1.7,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 1.5,
      "row": 4,
      "col": 7
    },
    {
      "year": 2016,
      "state_code": "OH",
      "state_name": "Ohio",
      "total": 2.3,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 1.8,
      "row": 4,
      "col": 7
    },
    {
      "year": 2015,
      "state_code": "OH",
      "state_name": "Ohio",
      "total": 2.9,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 2.4,
      "row": 4,
      "col": 7
    },
    {
      "year": 2021,
      "state_code": "OK",
      "state_name": "Oklahoma",
      "total": 2,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 1.4,
      "row": 7,
      "col": 4
    },
    {
      "year": 2020,
      "state_code": "OK",
      "state_name": "Oklahoma",
      "total": 2.1,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 1.6,
      "row": 7,
      "col": 4
    },
    {
      "year": 2019,
      "state_code": "OK",
      "state_name": "Oklahoma",
      "total": 2.2,
      "at_minimum_age": 0.6,
      "below_minimum_wage": 1.6,
      "row": 7,
      "col": 4
    },
    {
      "year": 2018,
      "state_code": "OK",
      "state_name": "Oklahoma",
      "total": 2.6,
      "at_minimum_age": 0.9,
      "below_minimum_wage": 1.7,
      "row": 7,
      "col": 4
    },
    {
      "year": 2017,
      "state_code": "OK",
      "state_name": "Oklahoma",
      "total": 3.1,
      "at_minimum_age": 1.4,
      "below_minimum_wage": 1.7,
      "row": 7,
      "col": 4
    },
    {
      "year": 2016,
      "state_code": "OK",
      "state_name": "Oklahoma",
      "total": 3.1,
      "at_minimum_age": 1.4,
      "below_minimum_wage": 1.6,
      "row": 7,
      "col": 4
    },
    {
      "year": 2015,
      "state_code": "OK",
      "state_name": "Oklahoma",
      "total": 3,
      "at_minimum_age": 1.5,
      "below_minimum_wage": 1.5,
      "row": 7,
      "col": 4
    },
    {
      "year": 2021,
      "state_code": "OR",
      "state_name": "Oregon",
      "total": 0.3,
      "at_minimum_age": 0,
      "below_minimum_wage": 0.3,
      "row": 4,
      "col": 1
    },
    {
      "year": 2020,
      "state_code": "OR",
      "state_name": "Oregon",
      "total": 0.4,
      "at_minimum_age": 0,
      "below_minimum_wage": 0.4,
      "row": 4,
      "col": 1
    },
    {
      "year": 2019,
      "state_code": "OR",
      "state_name": "Oregon",
      "total": 0.8,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 0.5,
      "row": 4,
      "col": 1
    },
    {
      "year": 2018,
      "state_code": "OR",
      "state_name": "Oregon",
      "total": 0.8,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 0.6,
      "row": 4,
      "col": 1
    },
    {
      "year": 2017,
      "state_code": "OR",
      "state_name": "Oregon",
      "total": 1.2,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 0.9,
      "row": 4,
      "col": 1
    },
    {
      "year": 2016,
      "state_code": "OR",
      "state_name": "Oregon",
      "total": 1,
      "at_minimum_age": 0,
      "below_minimum_wage": 1,
      "row": 4,
      "col": 1
    },
    {
      "year": 2015,
      "state_code": "OR",
      "state_name": "Oregon",
      "total": 0.7,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 0.5,
      "row": 4,
      "col": 1
    },
    {
      "year": 2021,
      "state_code": "PA",
      "state_name": "Pennsylvania",
      "total": 1.9,
      "at_minimum_age": 0.6,
      "below_minimum_wage": 1.3,
      "row": 4,
      "col": 8
    },
    {
      "year": 2020,
      "state_code": "PA",
      "state_name": "Pennsylvania",
      "total": 2.4,
      "at_minimum_age": 0.8,
      "below_minimum_wage": 1.6,
      "row": 4,
      "col": 8
    },
    {
      "year": 2019,
      "state_code": "PA",
      "state_name": "Pennsylvania",
      "total": 2.7,
      "at_minimum_age": 1.2,
      "below_minimum_wage": 1.5,
      "row": 4,
      "col": 8
    },
    {
      "year": 2018,
      "state_code": "PA",
      "state_name": "Pennsylvania",
      "total": 2.8,
      "at_minimum_age": 1.3,
      "below_minimum_wage": 1.5,
      "row": 4,
      "col": 8
    },
    {
      "year": 2017,
      "state_code": "PA",
      "state_name": "Pennsylvania",
      "total": 3.1,
      "at_minimum_age": 1.2,
      "below_minimum_wage": 1.9,
      "row": 4,
      "col": 8
    },
    {
      "year": 2016,
      "state_code": "PA",
      "state_name": "Pennsylvania",
      "total": 4.1,
      "at_minimum_age": 2.1,
      "below_minimum_wage": 2,
      "row": 4,
      "col": 8
    },
    {
      "year": 2015,
      "state_code": "PA",
      "state_name": "Pennsylvania",
      "total": 4.3,
      "at_minimum_age": 1.5,
      "below_minimum_wage": 2.7,
      "row": 4,
      "col": 8
    },
    {
      "year": 2021,
      "state_code": "RI",
      "state_name": "Rhode Island",
      "total": 1.2,
      "at_minimum_age": 0,
      "below_minimum_wage": 1.2,
      "row": 4,
      "col": 11
    },
    {
      "year": 2020,
      "state_code": "RI",
      "state_name": "Rhode Island",
      "total": 1.4,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 1.1,
      "row": 4,
      "col": 11
    },
    {
      "year": 2019,
      "state_code": "RI",
      "state_name": "Rhode Island",
      "total": 1.9,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1.8,
      "row": 4,
      "col": 11
    },
    {
      "year": 2018,
      "state_code": "RI",
      "state_name": "Rhode Island",
      "total": 2.3,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 1.7,
      "row": 4,
      "col": 11
    },
    {
      "year": 2017,
      "state_code": "RI",
      "state_name": "Rhode Island",
      "total": 1.4,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 1.1,
      "row": 4,
      "col": 11
    },
    {
      "year": 2016,
      "state_code": "RI",
      "state_name": "Rhode Island",
      "total": 2.7,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 2.3,
      "row": 4,
      "col": 11
    },
    {
      "year": 2015,
      "state_code": "RI",
      "state_name": "Rhode Island",
      "total": 1.5,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1.5,
      "row": 4,
      "col": 11
    },
    {
      "year": 2021,
      "state_code": "SC",
      "state_name": "South Carolina",
      "total": 2,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 1.6,
      "row": 6,
      "col": 8
    },
    {
      "year": 2020,
      "state_code": "SC",
      "state_name": "South Carolina",
      "total": 4.4,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 4.1,
      "row": 6,
      "col": 8
    },
    {
      "year": 2019,
      "state_code": "SC",
      "state_name": "South Carolina",
      "total": 5.4,
      "at_minimum_age": 1,
      "below_minimum_wage": 4.4,
      "row": 6,
      "col": 8
    },
    {
      "year": 2018,
      "state_code": "SC",
      "state_name": "South Carolina",
      "total": 4.1,
      "at_minimum_age": 1.3,
      "below_minimum_wage": 2.8,
      "row": 6,
      "col": 8
    },
    {
      "year": 2017,
      "state_code": "SC",
      "state_name": "South Carolina",
      "total": 3.8,
      "at_minimum_age": 1.2,
      "below_minimum_wage": 2.6,
      "row": 6,
      "col": 8
    },
    {
      "year": 2016,
      "state_code": "SC",
      "state_name": "South Carolina",
      "total": 5,
      "at_minimum_age": 1.6,
      "below_minimum_wage": 3.3,
      "row": 6,
      "col": 8
    },
    {
      "year": 2015,
      "state_code": "SC",
      "state_name": "South Carolina",
      "total": 4.7,
      "at_minimum_age": 2.9,
      "below_minimum_wage": 1.8,
      "row": 6,
      "col": 8
    },
    {
      "year": 2021,
      "state_code": "SD",
      "state_name": "South Dakota",
      "total": 0.9,
      "at_minimum_age": 0,
      "below_minimum_wage": 0.9,
      "row": 4,
      "col": 4
    },
    {
      "year": 2020,
      "state_code": "SD",
      "state_name": "South Dakota",
      "total": 1.5,
      "at_minimum_age": 0,
      "below_minimum_wage": 1.5,
      "row": 4,
      "col": 4
    },
    {
      "year": 2019,
      "state_code": "SD",
      "state_name": "South Dakota",
      "total": 2.2,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 2,
      "row": 4,
      "col": 4
    },
    {
      "year": 2018,
      "state_code": "SD",
      "state_name": "South Dakota",
      "total": 1.5,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 1.3,
      "row": 4,
      "col": 4
    },
    {
      "year": 2017,
      "state_code": "SD",
      "state_name": "South Dakota",
      "total": 1.8,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 1.4,
      "row": 4,
      "col": 4
    },
    {
      "year": 2016,
      "state_code": "SD",
      "state_name": "South Dakota",
      "total": 1.6,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 1.2,
      "row": 4,
      "col": 4
    },
    {
      "year": 2015,
      "state_code": "SD",
      "state_name": "South Dakota",
      "total": 2.4,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 2.1,
      "row": 4,
      "col": 4
    },
    {
      "year": 2021,
      "state_code": "TN",
      "state_name": "Tennessee",
      "total": 1.3,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 0.9,
      "row": 6,
      "col": 6
    },
    {
      "year": 2020,
      "state_code": "TN",
      "state_name": "Tennessee",
      "total": 1.6,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 1.3,
      "row": 6,
      "col": 6
    },
    {
      "year": 2019,
      "state_code": "TN",
      "state_name": "Tennessee",
      "total": 2.7,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 2.4,
      "row": 6,
      "col": 6
    },
    {
      "year": 2018,
      "state_code": "TN",
      "state_name": "Tennessee",
      "total": 3.4,
      "at_minimum_age": 1.4,
      "below_minimum_wage": 2,
      "row": 6,
      "col": 6
    },
    {
      "year": 2017,
      "state_code": "TN",
      "state_name": "Tennessee",
      "total": 4.1,
      "at_minimum_age": 1.5,
      "below_minimum_wage": 2.5,
      "row": 6,
      "col": 6
    },
    {
      "year": 2016,
      "state_code": "TN",
      "state_name": "Tennessee",
      "total": 3.9,
      "at_minimum_age": 1.8,
      "below_minimum_wage": 2.1,
      "row": 6,
      "col": 6
    },
    {
      "year": 2015,
      "state_code": "TN",
      "state_name": "Tennessee",
      "total": 4.7,
      "at_minimum_age": 2.1,
      "below_minimum_wage": 2.5,
      "row": 6,
      "col": 6
    },
    {
      "year": 2021,
      "state_code": "TX",
      "state_name": "Texas",
      "total": 2.4,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 1.9,
      "row": 8,
      "col": 4
    },
    {
      "year": 2020,
      "state_code": "TX",
      "state_name": "Texas",
      "total": 2.3,
      "at_minimum_age": 0.6,
      "below_minimum_wage": 1.7,
      "row": 8,
      "col": 4
    },
    {
      "year": 2019,
      "state_code": "TX",
      "state_name": "Texas",
      "total": 2.8,
      "at_minimum_age": 0.7,
      "below_minimum_wage": 2.2,
      "row": 8,
      "col": 4
    },
    {
      "year": 2018,
      "state_code": "TX",
      "state_name": "Texas",
      "total": 3.4,
      "at_minimum_age": 1,
      "below_minimum_wage": 2.4,
      "row": 8,
      "col": 4
    },
    {
      "year": 2017,
      "state_code": "TX",
      "state_name": "Texas",
      "total": 3.1,
      "at_minimum_age": 1.2,
      "below_minimum_wage": 1.9,
      "row": 8,
      "col": 4
    },
    {
      "year": 2016,
      "state_code": "TX",
      "state_name": "Texas",
      "total": 3.9,
      "at_minimum_age": 1.6,
      "below_minimum_wage": 2.3,
      "row": 8,
      "col": 4
    },
    {
      "year": 2015,
      "state_code": "TX",
      "state_name": "Texas",
      "total": 4.7,
      "at_minimum_age": 1.8,
      "below_minimum_wage": 2.9,
      "row": 8,
      "col": 4
    },
    {
      "year": 2021,
      "state_code": "UT",
      "state_name": "Utah",
      "total": 1.5,
      "at_minimum_age": 0.6,
      "below_minimum_wage": 0.9,
      "row": 5,
      "col": 2
    },
    {
      "year": 2020,
      "state_code": "UT",
      "state_name": "Utah",
      "total": 1.1,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 0.6,
      "row": 5,
      "col": 2
    },
    {
      "year": 2019,
      "state_code": "UT",
      "state_name": "Utah",
      "total": 2.1,
      "at_minimum_age": 0.6,
      "below_minimum_wage": 1.5,
      "row": 5,
      "col": 2
    },
    {
      "year": 2018,
      "state_code": "UT",
      "state_name": "Utah",
      "total": 1.6,
      "at_minimum_age": 0.8,
      "below_minimum_wage": 0.8,
      "row": 5,
      "col": 2
    },
    {
      "year": 2017,
      "state_code": "UT",
      "state_name": "Utah",
      "total": 2.4,
      "at_minimum_age": 1.4,
      "below_minimum_wage": 1,
      "row": 5,
      "col": 2
    },
    {
      "year": 2016,
      "state_code": "UT",
      "state_name": "Utah",
      "total": 2.7,
      "at_minimum_age": 1.1,
      "below_minimum_wage": 1.6,
      "row": 5,
      "col": 2
    },
    {
      "year": 2015,
      "state_code": "UT",
      "state_name": "Utah",
      "total": 3.3,
      "at_minimum_age": 1.7,
      "below_minimum_wage": 1.5,
      "row": 5,
      "col": 2
    },
    {
      "year": 2021,
      "state_code": "VT",
      "state_name": "Vermont",
      "total": 1.1,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1,
      "row": 2,
      "col": 10
    },
    {
      "year": 2020,
      "state_code": "VT",
      "state_name": "Vermont",
      "total": 0.5,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 0.4,
      "row": 2,
      "col": 10
    },
    {
      "year": 2019,
      "state_code": "VT",
      "state_name": "Vermont",
      "total": 2,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1.8,
      "row": 2,
      "col": 10
    },
    {
      "year": 2018,
      "state_code": "VT",
      "state_name": "Vermont",
      "total": 2.5,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 2.1,
      "row": 2,
      "col": 10
    },
    {
      "year": 2017,
      "state_code": "VT",
      "state_name": "Vermont",
      "total": 1.8,
      "at_minimum_age": 0.8,
      "below_minimum_wage": 1.1,
      "row": 2,
      "col": 10
    },
    {
      "year": 2016,
      "state_code": "VT",
      "state_name": "Vermont",
      "total": 2.5,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 2,
      "row": 2,
      "col": 10
    },
    {
      "year": 2015,
      "state_code": "VT",
      "state_name": "Vermont",
      "total": 1.9,
      "at_minimum_age": 0.2,
      "below_minimum_wage": 1.6,
      "row": 2,
      "col": 10
    },
    {
      "year": 2021,
      "state_code": "VA",
      "state_name": "Virginia",
      "total": 2.2,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 1.7,
      "row": 5,
      "col": 8
    },
    {
      "year": 2020,
      "state_code": "VA",
      "state_name": "Virginia",
      "total": 2.7,
      "at_minimum_age": 0.7,
      "below_minimum_wage": 2,
      "row": 5,
      "col": 8
    },
    {
      "year": 2019,
      "state_code": "VA",
      "state_name": "Virginia",
      "total": 2.3,
      "at_minimum_age": 0.6,
      "below_minimum_wage": 1.6,
      "row": 5,
      "col": 8
    },
    {
      "year": 2018,
      "state_code": "VA",
      "state_name": "Virginia",
      "total": 2.8,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 2.4,
      "row": 5,
      "col": 8
    },
    {
      "year": 2017,
      "state_code": "VA",
      "state_name": "Virginia",
      "total": 3.6,
      "at_minimum_age": 0.8,
      "below_minimum_wage": 2.8,
      "row": 5,
      "col": 8
    },
    {
      "year": 2016,
      "state_code": "VA",
      "state_name": "Virginia",
      "total": 4.3,
      "at_minimum_age": 1.4,
      "below_minimum_wage": 2.9,
      "row": 5,
      "col": 8
    },
    {
      "year": 2015,
      "state_code": "VA",
      "state_name": "Virginia",
      "total": 6.2,
      "at_minimum_age": 2.6,
      "below_minimum_wage": 3.6,
      "row": 5,
      "col": 8
    },
    {
      "year": 2021,
      "state_code": "WA",
      "state_name": "Washington",
      "total": 0.6,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 0.6,
      "row": 3,
      "col": 1
    },
    {
      "year": 2020,
      "state_code": "WA",
      "state_name": "Washington",
      "total": 0.5,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 0.5,
      "row": 3,
      "col": 1
    },
    {
      "year": 2019,
      "state_code": "WA",
      "state_name": "Washington",
      "total": 0.8,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 0.7,
      "row": 3,
      "col": 1
    },
    {
      "year": 2018,
      "state_code": "WA",
      "state_name": "Washington",
      "total": 0.7,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 0.6,
      "row": 3,
      "col": 1
    },
    {
      "year": 2017,
      "state_code": "WA",
      "state_name": "Washington",
      "total": 0.8,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 0.6,
      "row": 3,
      "col": 1
    },
    {
      "year": 2016,
      "state_code": "WA",
      "state_name": "Washington",
      "total": 1.4,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 1,
      "row": 3,
      "col": 1
    },
    {
      "year": 2015,
      "state_code": "WA",
      "state_name": "Washington",
      "total": 1.1,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 0.7,
      "row": 3,
      "col": 1
    },
    {
      "year": 2021,
      "state_code": "WV",
      "state_name": "West Virginia",
      "total": 1.4,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1.3,
      "row": 5,
      "col": 7
    },
    {
      "year": 2020,
      "state_code": "WV",
      "state_name": "West Virginia",
      "total": 2,
      "at_minimum_age": 0.1,
      "below_minimum_wage": 1.9,
      "row": 5,
      "col": 7
    },
    {
      "year": 2019,
      "state_code": "WV",
      "state_name": "West Virginia",
      "total": 2.3,
      "at_minimum_age": 0.6,
      "below_minimum_wage": 1.7,
      "row": 5,
      "col": 7
    },
    {
      "year": 2018,
      "state_code": "WV",
      "state_name": "West Virginia",
      "total": 1.8,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 1.4,
      "row": 5,
      "col": 7
    },
    {
      "year": 2017,
      "state_code": "WV",
      "state_name": "West Virginia",
      "total": 2.1,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 1.6,
      "row": 5,
      "col": 7
    },
    {
      "year": 2016,
      "state_code": "WV",
      "state_name": "West Virginia",
      "total": 2.2,
      "at_minimum_age": 0.6,
      "below_minimum_wage": 1.7,
      "row": 5,
      "col": 7
    },
    {
      "year": 2015,
      "state_code": "WV",
      "state_name": "West Virginia",
      "total": 3.4,
      "at_minimum_age": 1,
      "below_minimum_wage": 2.3,
      "row": 5,
      "col": 7
    },
    {
      "year": 2021,
      "state_code": "WI",
      "state_name": "Wisconsin",
      "total": 1.6,
      "at_minimum_age": 0.4,
      "below_minimum_wage": 1.1,
      "row": 2,
      "col": 6
    },
    {
      "year": 2020,
      "state_code": "WI",
      "state_name": "Wisconsin",
      "total": 1.8,
      "at_minimum_age": 0.7,
      "below_minimum_wage": 1.1,
      "row": 2,
      "col": 6
    },
    {
      "year": 2019,
      "state_code": "WI",
      "state_name": "Wisconsin",
      "total": 2.3,
      "at_minimum_age": 1,
      "below_minimum_wage": 1.3,
      "row": 2,
      "col": 6
    },
    {
      "year": 2018,
      "state_code": "WI",
      "state_name": "Wisconsin",
      "total": 2.3,
      "at_minimum_age": 0.8,
      "below_minimum_wage": 1.5,
      "row": 2,
      "col": 6
    },
    {
      "year": 2017,
      "state_code": "WI",
      "state_name": "Wisconsin",
      "total": 2.7,
      "at_minimum_age": 0.9,
      "below_minimum_wage": 1.8,
      "row": 2,
      "col": 6
    },
    {
      "year": 2016,
      "state_code": "WI",
      "state_name": "Wisconsin",
      "total": 2.6,
      "at_minimum_age": 1,
      "below_minimum_wage": 1.6,
      "row": 2,
      "col": 6
    },
    {
      "year": 2015,
      "state_code": "WI",
      "state_name": "Wisconsin",
      "total": 3.4,
      "at_minimum_age": 1.7,
      "below_minimum_wage": 1.7,
      "row": 2,
      "col": 6
    },
    {
      "year": 2021,
      "state_code": "WY",
      "state_name": "Wyoming",
      "total": 1.9,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 1.4,
      "row": 4,
      "col": 3
    },
    {
      "year": 2020,
      "state_code": "WY",
      "state_name": "Wyoming",
      "total": 1.9,
      "at_minimum_age": 0.3,
      "below_minimum_wage": 1.6,
      "row": 4,
      "col": 3
    },
    {
      "year": 2019,
      "state_code": "WY",
      "state_name": "Wyoming",
      "total": 2.5,
      "at_minimum_age": 0.5,
      "below_minimum_wage": 1.9,
      "row": 4,
      "col": 3
    },
    {
      "year": 2018,
      "state_code": "WY",
      "state_name": "Wyoming",
      "total": 2.5,
      "at_minimum_age": 0.6,
      "below_minimum_wage": 1.8,
      "row": 4,
      "col": 3
    },
    {
      "year": 2017,
      "state_code": "WY",
      "state_name": "Wyoming",
      "total": 2.2,
      "at_minimum_age": 0.9,
      "below_minimum_wage": 1.2,
      "row": 4,
      "col": 3
    },
    {
      "year": 2016,
      "state_code": "WY",
      "state_name": "Wyoming",
      "total": 2.5,
      "at_minimum_age": 0.7,
      "below_minimum_wage": 1.8,
      "row": 4,
      "col": 3
    },
    {
      "year": 2015,
      "state_code": "WY",
      "state_name": "Wyoming",
      "total": 3.5,
      "at_minimum_age": 1.4,
      "below_minimum_wage": 2.1,
      "row": 4,
      "col": 3
    }
  ]    
);


export {data};
