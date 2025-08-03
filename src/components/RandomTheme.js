import React from 'react';
import './RandomTheme.css';
class RandomTheme extends React.Component {

    changeTheme = () => {
        const colorThemes = [
            {
                bgColorLeft: '#d972ff',
                bgColorRight: '#581b98'
            },
            {
                bgColorLeft: '#a7ff83',
                bgColorRight: '#17b978'

            },
            {
                bgColorLeft: '#CB91FE',
                bgColorRight: '#5F01B2'

            },
            {
                bgColorLeft: '#9D2EFE',
                bgColorRight: '#3D0C6A'

            },
            {
                bgColorLeft: '#88EF69',
                bgColorRight: '#362E48'

            },
            {
                bgColorLeft: '#ffa600',
                bgColorRight: '#44475a'
            },
            {
                bgColorLeft: '#8078E7',
                bgColorRight: '#4B4681'
            },
            {
                bgColorLeft: '#B1B3E4',
                bgColorRight: '#333794'
            },
            {
                bgColorLeft: '#CA96DB',
                bgColorRight: '#7D3394'
            },
            {
                bgColorLeft: '#F9A6A8',
                bgColorRight: '#55456F'
            },
            {
                bgColorLeft: '#dcd6f7',
                bgColorRight: '#424874'
            },
            {
                bgColorLeft: '#aba9e9',
                bgColorRight: '#64638f'
            },
            {
                bgColorLeft: '#ffe9e3',
                bgColorRight: '#7c73e6'
            },
            {
                bgColorLeft: '#efb1ff',
                bgColorRight: '#742dd2'
            },
            {
                bgColorLeft: '#fee856',
                bgColorRight: '#1b0044'
            },
            {
                bgColorLeft: '#fee856',
                bgColorRight: '#5c2a9d'
            },
            {
                bgColorLeft: '#16db93',
                bgColorRight: '#2c699a'
            },
            {
                bgColorLeft: '#ffc4d6',
                bgColorRight: '#ff5d8f'
            },
            {
                bgColorLeft: '#80ed99',
                bgColorRight: '#22577a'
            },
            {
                bgColorLeft: '#ffb2e6',
                bgColorRight: '#8447ff'
            },
            {
                bgColorLeft: '',
                bgColorRight: ''
            }

        ];
        const patterns = ['graph-paper', 'gigsaw', '', 'hideout', 'dots', '', 'falling-triangles', 'circuit-board', '',
            'temple', 'anchors', '', 'brickwall', 'wiggle', 'overlapping-circles', '', 'tic-tac-toe', 'leaf', '', 'bubbles', 'squares', ''];
        const indexOfColors = Math.floor(Math.random() * colorThemes.length);
        const theme = colorThemes[indexOfColors];

        const indexOfPattern = Math.floor(Math.random() * patterns.length);
        const Pattern = patterns[indexOfPattern];

        this.props.onThemeChange(theme, Pattern);
    }

    render() {
        return (
            <div className="flex flex-col justify-center">
                <div className="shuffle-btn  flex justify-center items-center    p-2    cursor-pointer" onClick={this.changeTheme}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="text-gray-600 hover:text-gray-700 " width="20" height="20" viewBox="0 0 24 24" ><path d="M17 17h-1.559l-9.7-10.673A1 1 0 0 0 5.001 6H2v2h2.559l4.09 4.5-4.09 4.501H2v2h3.001a1 1 0 0 0 .74-.327L10 13.987l4.259 4.686a1 1 0 0 0 .74.327H17v3l5-4-5-4v3z"></path><path d="M15.441 8H17v3l5-3.938L17 3v3h-2.001a1 1 0 0 0-.74.327l-3.368 3.707 1.48 1.346L15.441 8z"></path></svg>
                </div>

            </div>
        );
    }
}
export default RandomTheme;
