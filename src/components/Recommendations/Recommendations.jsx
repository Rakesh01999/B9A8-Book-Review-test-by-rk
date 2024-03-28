import React from 'react';

const Recommendations = () => {
    return (
        <div>
            <div className='text-center my-8'>
                <h1 className='text-[30px] md:text-3xl font-bold text-green-500'>Book Recommendations</h1>
                <p className='text-xl font-semibold italic mt-2'>Discover recommended books based on different genres and themes.</p>
            </div>
            <div className='md:w-[1800px] grid md:grid-cols-2 gap-5 mx-auto mb-10'>
                <div className='border-4 border-green-400 rounded-3xl  p-5'>
                    <h1 className='text-[20px] font-bold text-red-900'>Classic Literature:</h1>
                    <ul className='text-xl list-disc list-inside'>
                        <li>
                            "To Kill a Mockingbird" by Harper Lee
                        </li>
                        <li>
                            "1984" by George Orwell
                        </li>
                        <li>
                            "Pride and Prejudice" by Jane Austen
                        </li>
                        <li>
                            "The Catcher in the Rye" by J.D. Salinger
                        </li>
                        "The Great Gatsby" by F. Scott Fitzgerald
                    </ul>
                </div>
                <div className='border-4 border-green-400 rounded-3xl  p-5'>
                    <h1 className='text-[20px] font-bold text-red-500'>Young Adult:</h1>
                    <ul className='text-xl list-disc list-inside'>
                        <li>
                            "The Hunger Games" by Suzanne Collins
                        </li>
                        <li>
                            "Harry Potter and the Sorcerer's Stone" by J.K. Rowling
                        </li>
                        <li>
                            "The Fault in Our Stars" by John Green
                        </li>
                        <li>
                            "The Perks of Being a Wallflower" by Stephen Chbosky
                        </li>
                        <li>"Divergent" by Veronica Roth</li>
                    </ul>
                </div>

                <div className='border-4 border-green-400 rounded-3xl  p-5'>
                    <h1 className='text-[20px] font-bold text-blue-700'>Science Fiction:</h1>
                    <ul className='text-xl list-disc list-inside'>
                        <li>
                            "Dune" by Frank Herbert
                        </li>
                        <li>
                            "The Hitchhiker's Guide to the Galaxy" by Douglas Adams
                        </li>
                        <li>
                            "Neuromancer" by William Gibson
                        </li>
                        <li>
                            "Foundation" by Isaac Asimov
                        </li>
                        <li>"Ender's Game" by Orson Scott Card</li>
                    </ul>
                </div>

                <div className='border-4 border-green-400 rounded-3xl  p-5'>
                    <h1 className='text-[20px] font-bold text-gray-600'>Mystery and Thriller:</h1>
                    <ul className='text-xl list-disc list-inside'>
                        <li>
                            "The Girl with the Dragon Tattoo" by Stieg Larsson
                        </li>
                        <li>
                            "Gone Girl" by Gillian Flynn
                        </li>
                        <li>
                            "The Da Vinci Code" by Dan Brown
                        </li>
                        <li>
                            "The Silent Patient" by Alex Michaelides
                        </li>
                        <li>"The Woman in the Window" by A.J. Finn</li>
                    </ul>
                </div>

                <div className='border-4 border-green-400 rounded-3xl  p-5'>
                    <h1 className='text-[20px] font-bold text-purple-800'>Fantasy:</h1>
                    <ul className='text-xl list-disc list-inside'>
                        <li>
                            "The Lord of the Rings" by J.R.R. Tolkien
                        </li>
                        <li>
                            "Harry Potter and the Sorcerer's Stone" by J.K. Rowling
                        </li>
                        <li>
                            "A Game of Thrones" by George R.R. Martin
                        </li>
                        <li>
                            "Mistborn: The Final Empire" by Brandon Sanderson
                        </li>
                        <li>"The Name of the Wind" by Patrick Rothfuss</li>
                    </ul>
                </div>

                <div className='border-4 border-green-400 rounded-3xl  p-5'>
                    <h1 className='text-[20px] font-bold text-yellow-500'>Biography and Memoir:</h1>
                    <ul className='text-xl list-disc list-inside'>
                        <li>
                            "The Diary of a Young Girl" by Anne Frank
                        </li>
                        <li>
                            "Steve Jobs" by Walter Isaacson
                        </li>
                        <li>
                            "Becoming" by Michelle Obama
                        </li>
                        <li>
                            "Educated" by Tara Westover
                        </li>
                        <li>"Born a Crime" by Trevor Noah</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Recommendations;