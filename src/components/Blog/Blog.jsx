import React from 'react';
import { FaBook, FaPencilAlt, FaUser } from 'react-icons/fa';


const Blog = () => {
    return (
        <div className='my-10'>
            <div className='flex flex-col items-center gap-6'>
                <h1 className='text-5xl font-bold font-serif italic text-white text-center bg-green-400 w-[200px] rounded-full'>Blog</h1>
                <p className='text-2xl font-semibold'>Welcome to our blog section. Explore our latest articles and posts.</p>
            </div>

            <div className='md:w-[1800px] grid md:grid-cols-3 gap-5 mx-auto my-10'>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" />
                    <h2 className="text-lg font-semibold text-gray-800 mb-2 ">Exploring the Legacy of William Shakespeare</h2>
                    <p className="text-sm text-gray-600">Dive into the life and works of one of the most influential writers in English literature, William Shakespeare. Discuss his famous plays, sonnets, and enduring impact on literature and culture.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" />
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">The Timeless Wisdom of Jane Austen</h2>
                    <p className="text-sm text-gray-600">Explore the timeless appeal of Jane Austen's novels, including "Pride and Prejudice," "Sense and Sensibility," and "Emma." Discuss her unique style, themes, and portrayal of society in Regency-era England.</p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" />
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        Unlocking Shakespeare's Genius: A Journey Through His Iconic Plays
                    </h2>
                    <p className="text-sm text-gray-600">
                        This article explores the enduring appeal and literary genius of William Shakespeare by analyzing some of his most famous plays, including "Hamlet," "Romeo and Juliet," and "Macbeth." It delves into Shakespeare's language, themes, and characters to uncover why his works continue to captivate audiences worldwide.
                    </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" />
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        Jane Austen: Master of Romance and Social Satire
                    </h2>
                    <p className="text-sm text-gray-600">
                        Dive into the world of Jane Austen's novels, where love, marriage, and society intersect. This article examines Austen's keen observations of Regency-era England, her memorable characters, and the timeless themes of love, class, and morality found in works like "Pride and Prejudice" and "Emma."
                    </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" />
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        Agatha Christie: Queen of Crime and Mystery
                    </h2>
                    <p className="text-sm text-gray-600">
                        Take a journey into the intricate plots and cunning detectives of Agatha Christie's murder mysteries. From Hercule Poirot to Miss Marple, this article explores Christie's iconic characters, her ingenious plotting techniques, and the enduring popularity of novels like "Murder on the Orient Express" and "The Murder of Roger Ackroyd.
                    </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" />
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        George Orwell's Warning: Exploring the Dystopian Worlds of '1984' and 'Animal Farm
                    </h2>
                    <p className="text-sm text-gray-600">
                        Delve into the chilling dystopian visions of George Orwell and their striking relevance to modern society. This article analyzes Orwell's critique of totalitarianism, censorship, and surveillance in "1984" and "Animal Farm," highlighting their enduring impact on literature and politics.
                    </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" />
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        Ernest Hemingway: Capturing Life's Essence in Spare Prose
                    </h2>
                    <p className="text-sm text-gray-600">
                        Explore the minimalist prose and profound themes of Ernest Hemingway's novels and short stories. From the battlefields of World War I to the bullrings of Spain, this article examines Hemingway's exploration of masculinity, courage, and the human condition in works like "The Old Man and the Sea" and "A Farewell to Arms.
                    </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" />
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        Virginia Woolf's Literary Experimentation: A Journey Through Modernist Narratives
                    </h2>
                    <p className="text-sm text-gray-600">
                        Navigate the innovative narrative techniques and feminist themes of Virginia Woolf's novels. This article discusses Woolf's stream-of-consciousness style, her exploration of gender and identity, and the literary revolution she sparked with works like "Mrs. Dalloway" and "To the Lighthouse."
                    </p>
                </div>
                <div className="bg-white shadow-md rounded-lg p-6">
                    <FaBook className="text-4xl text-blue-500 mb-4 mx-auto" />
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                        J.K. Rowling's Wizarding World: The Magic and Morality of Harry Potter
                    </h2>
                    <p className="text-sm text-gray-600">
                        mbark on a magical journey through the world of Harry Potter and explore the themes of friendship, courage, and the power of love. This article celebrates J.K. Rowling's imaginative storytelling and the profound impact of the "Harry Potter" series on readers of all ages.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;