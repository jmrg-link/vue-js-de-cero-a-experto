export default () =>({
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Lorem ipsum dolor sit amet consectetur adipiscing, elit aenean vestibulum et conubia nascetur, purus mi volutpat fames a. ',
            picture: null, // https:// uri
        },
        {
            id: new Date().getTime() * 2,
            date: new Date().toDateString(),
            text: 'Lobortis tincidunt ac nam magnis tristique natoque suscipit elementum montes sociis bibendum, orci nisl mauris senectus interdum metus torquent luctus parturient aliquam quisque, mus etiam laoreet augue viverra felis dapibus volutpat tortor duis. Mi cum ridiculus magnis semper massa senectus in accumsan iaculis suspendisse eleifend blandit, non phasellus himenaeos fringilla convallis venenatis platea pulvinar tellus pellentesque.',
            picture: null, // https:// uri
        },{
            id: new Date().getTime() * 2.5,
            date: new Date().toDateString(),
            text: 'Ut varius lobortis posuere ultricies faucibus accumsan nec in mattis, eget augue torquent quam molestie feugiat nisl mollis',
            picture: null, // https:// uri
        },


    ]
})